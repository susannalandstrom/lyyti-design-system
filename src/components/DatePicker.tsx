import {
  DatePicker as MuiDatePicker,
  DatePickerProps as MuiDatepickerProps,
} from '@mui/x-date-pickers/DatePicker';
import Calendar from '../icons/Calendar';
import type { OutlinedInputProps as MuiOutlinedInputProps, OutlinedInputProps } from '@mui/material';
import { TextFieldProps, TextInputProps } from './TextField';

export interface DatePickerProps<TDate = unknown> extends Omit<MuiDatepickerProps<TDate>, 'renderInput' | 'InputProps'> {
  allowAllYears?: boolean;
  InputProps?: Partial<TextInputProps>;
  // InputProps?: Partial<OutlinedInputProps>
}

const isDisallowedYear = (date: any) => {
  const year = new Date(date).getFullYear();
  const maxYear = new Date().getFullYear() + 10;
  return year < 2006 || year > maxYear;
};

const DatePicker = <TDate = unknown>(
  {
    allowAllYears = false,
    InputProps = { color: 'primary', id: 'datepicker', defaultValue: '' },
    ...props
  }: DatePickerProps<TDate>,
): JSX.Element => {
  return (
    <MuiDatePicker
      slots={{ openPickerIcon: (iconProps) => Calendar({ fontSize: 'small', ...iconProps }) }}
      slotProps={
        {desktopPaper: {
          sx: {
            '& .MuiPickersDay-today': {
              bgcolor: '#fff',
              borderColor: 'primary.main',
              color: 'primary.main',
              '&:focus': {
                bgcolor: 'common.white',
              },
            },
            '& .MuiPickersDay-root': {
              fontSize: '1rem',
              '&:hover': {
                bgcolor: 'primaryStates.selected',
                color: 'primary.main',
              },
            },
            '& .MuiPickersDay-root:not(.Mui-selected)': {
              borderColor: 'primary.main',
            },
            '& .MuiPickersSlideTransition-root': {
              minHeight: '244px',
            },
            '& .MuiOutlinedInput-root:hover': {
              borderColor: 'common.white',
            },
            '& .MuiPickersYear-yearButton:hover': {
              bgcolor: 'primaryStates.selected',
            },
            '& .MuiIconButton-root:hover': {
              bgcolor: 'primaryStates.selected',
            },
            ...(!allowAllYears && {
              '& .MuiPickersYear-root': {
                height: 'min-content',
                width: 'min-content',
                '& .Mui-disabled': {
                  display: 'none',
                },
              },
              '& .MuiPickersYear-root:nth-of-type(-n+106)': {
                display: 'none',
              },
            }),
          },
        },
        // textField: {InputProps: InputProps as Partial<OutlinedInputProps>}
        textField: {InputProps}
        }}
      shouldDisableYear={(year) => !allowAllYears ? isDisallowedYear(year) : false}
      {...props}
    />
  );
};

export default DatePicker;
