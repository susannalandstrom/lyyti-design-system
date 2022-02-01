import { Story, Meta } from '@storybook/react/types-6-0';
import Button, { ButtonProps } from '../../src/components/Button';
import { Bin } from '../../src/icons';

export default {
  title: 'Components/Inputs/Button',
  component: Button,
  argTypes: {
    color: {
      control: { type: 'radio', options: ['primary', 'secondary', 'inherit'] },
    },
  },
  args: {
    children: 'Button',
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {};

export const OutlinedPrimary = Template.bind({});
OutlinedPrimary.args = {
  color: 'primary',
  variant: 'outlined',
};

export const OutlinedSecondary = Template.bind({});
OutlinedSecondary.args = {
  variant: 'outlined',
};

export const TextPrimary = Template.bind({});
TextPrimary.args = {
  color: 'primary',
  variant: 'text',
};

export const TextSecondary = Template.bind({});
TextSecondary.args = {
  variant: 'text',
};

export const Chunky = Template.bind({});
Chunky.args = {
  chunky: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  startIcon: <Bin fontSize="small" />,
};

export const Icon = Template.bind({});
Icon.args = {
  children: <Bin fontSize="small" />,
};