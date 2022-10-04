import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ContactComplete } from '.';

export default {
  component: ContactComplete,
  title: 'ContactComplete',
} as ComponentMeta<typeof ContactComplete>;

const Template: ComponentStory<typeof ContactComplete> = (args) => (
  <ContactComplete {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
