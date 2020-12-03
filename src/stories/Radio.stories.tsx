import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Radio, { RadioProps } from '../components/Radio';
import FormControlLabel, { FormControlLabelProps } from '../components/FormControlLabel';
import ThemeSelector from "../themes/ThemeSelector";

export default {
  title: 'Components/Radio',
  component: Radio,
} as Meta;

const Template: Story<RadioProps> = (args) => <ThemeSelector><Radio {...args} /></ThemeSelector>;

const LabelTemplate: Story<FormControlLabelProps> = (args) => <ThemeSelector><FormControlLabel {...args} /></ThemeSelector>;

export const Medium = Template.bind({});
Medium.args = {
  checked: true,
  disabled: false,
  size: 'medium'
};

export const Small = Template.bind({});
Small.args = {
  checked: true,
  disabled: false,
  size: 'small'
};

export const Label = LabelTemplate.bind({});
Label.args = {
  control: <Radio />,
  label: 'Label'
}