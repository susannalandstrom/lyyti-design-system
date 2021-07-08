import { useRef } from 'react';
import {
  TextField as MuiTextField,
  OutlinedTextFieldProps,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core';

const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    root: (props: Record<string, unknown>) => {
      const overrideColor = props.color === 'white' ? theme.palette.common.white : undefined;

      return {
        minWidth: '220px',
        '&:hover': {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: overrideColor,
          },
        },
        '& label': {
          color: overrideColor ?? theme.palette.grey[400],
          letterSpacing: '0.15px',
          lineHeight: '26px',
        },
        '& .MuiFormLabel-root.Mui-focused': {
          color: overrideColor,
        },
        '& .MuiFormLabel-root.Mui-disabled': {
          color: overrideColor ?? theme.palette.grey[400],
        },
        '& .MuiInputLabel-shrink': {
          transform: 'translate(0, 0) scale(1)',
        },
        '& .MuiInputLabel-formControl': {
          position: 'relative',
        },
        '& .MuiInputBase-root.Mui-disabled': {
          backgroundColor: overrideColor ?? theme.palette.action.selected,
        },
        '& .MuiFormHelperText-root': {
          letterSpacing: '0.15px',
        },
        '& .MuiFormHelperText-contained': {
          marginLeft: 0,
        },
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: overrideColor,
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: overrideColor,
        },
        '& .MuiInputBase-input::placeholder': {
          color: overrideColor,
        },
        '& .MuiInputBase-input': {
          color: overrideColor,
        },
        '& .MuiSelect-icon': {
          color: overrideColor,
        },
      };
    },
  })
);

export type VariantTypes = 'outlined';
export type ColorTypes = 'primary' | 'white';

export type TextFieldProps = Omit<OutlinedTextFieldProps, 'color'> & {
  color?: ColorTypes;
  variant: VariantTypes;
};

const TextField = ({ color = 'primary', ...props }: TextFieldProps): JSX.Element => {
  const muiTextField = useRef<HTMLInputElement>(null);
  const classes = useStyles({ color });

  return (
    <MuiTextField
      {...props}
      onClick={() => muiTextField.current?.focus()}
      inputRef={muiTextField}
      classes={{ root: classes.root }}
    />
  );
};

TextField.defaultProps = {
  margin: 'dense',
  label: 'Label',
  placeholder: 'Placeholder',
  InputLabelProps: { shrink: true },
  InputProps: { notched: false },
};

export default TextField;
