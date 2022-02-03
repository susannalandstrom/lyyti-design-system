import { Story, Meta } from '@storybook/react/types-6-0';
import { useState } from 'react';
import DatePicker, { DatePickerProps } from '../../src/components/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterMoment from '@mui/lab/AdapterMoment';

export default {
  title: 'Components/Inputs/DatePicker',
  component: DatePicker,
  parameters: {
    docs: {
      description: {
        component: 'Date pickers let the user select a date.',
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#045b56' },
      ],
    },
  },
} as Meta;

const Template: Story<DatePickerProps<Date>> = (args) => {
  const [value, setValue] = useState<Date | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DatePicker
        {...args}
        value={value}
        onChange={(newValue) => {
          console.log(newValue);
          setValue(newValue);
        }}
      />
    </LocalizationProvider>
  );
};

export const Default = Template.bind({});
Default.args = {};

export const White = Template.bind({});
White.args = {
  label: 'Event date',
  color: 'white',
  showDaysOutsideCurrentMonth: false,
  allowAllYears: true,
};
White.parameters = {
  backgrounds: { default: 'dark' },
};
