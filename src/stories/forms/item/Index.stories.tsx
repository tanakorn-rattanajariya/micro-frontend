import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import FormItem, { FormItemProps } from "./index";
export default {
  title: "Form/Item",
  component: FormItem,
} as Meta;

const Template: Story<FormItemProps> = (args) => <FormItem {...args} />;

export const ItemExample = Template.bind({});
ItemExample.args = {
  label: "Form Item Example",
  required: true,
  name: "example",
  item: {
    type: "text",
  },
};
