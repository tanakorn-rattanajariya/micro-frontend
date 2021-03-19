import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0';
import FormItem,{FormItemProps} from './Item'
export default {
  title: "Form/Item",
  component: FormItem,
} as Meta;

const Template: Story<FormItemProps> = (args) => <FormItem {...args} />;

export const _FormItem = Template.bind({});
_FormItem.args = {
  label: "Form Item Example",
  layout: {
    wrapperCol: {
      span: 8,
      offset: 16,
    },
  },
  required: true,
  name: "example",
};