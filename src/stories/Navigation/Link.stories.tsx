import { Story, Meta } from '@storybook/react/types-6-0';
import Link, { LinkProps } from 'components/Link';
import ThemeSelector from 'themes/ThemeSelector';
import { Cog } from 'icons';

export default {
  title: 'Components/Navigation/Link',
  component: Link,
} as Meta;

const Template: Story<LinkProps> = (args) => (
  <ThemeSelector>
    <Link {...args} />
  </ThemeSelector>
);

export const ListLink = Template.bind({});
ListLink.args = {
  href: '#',
  children: 'Link example',
  underline: 'hover',
};

export const InlineLink = Template.bind({});
InlineLink.args = {
  href: '#',
  children: 'Link example',
  underline: 'always',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  href: '#',
  children: [<Cog key={1} fontSize="inherit" style={{ marginRight: '8px' }} />, 'Link example'],
  underline: 'always',
};
