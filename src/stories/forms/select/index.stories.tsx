import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import SelectInput, { SelectInputProps } from "./index";
export default {
  title: "Form/Select",
  component: SelectInput,
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["small", "middle", "large"],
      },
    },
    mode: {
      control: {
        type: "select",
        options: ["multiple", "tags", "default"],
      },
    },
  },
} as Meta;

const Template: Story<SelectInputProps> = (args) => <SelectInput {...args} />;

export const SimpleSelect = Template.bind({});

SimpleSelect.args = {
  disabled: false,
  size: "middle",
  options: [
    {
      key: "a",
      value: "Select A",
    },
    {
      key: "b",
      value: "Select B",
    },
    {
      key: "c",
      value: "Select C",
    },
    {
      key: "d",
      value: "Select D",
      disabled: true,
    },
  ],
};
