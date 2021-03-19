import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0';
import {_FormItem,FormItemProps} from './Item'
export default {
  title: "Form/Item",
  component: _FormItem,
  argTypes: {},
} as Meta;

const Template: Story<FormItemProps> = (args) => <_FormItem {...args} />;

export const FormItem = Template.bind({});