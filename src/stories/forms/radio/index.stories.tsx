import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import RadioInput, { RadioInputProps } from "./index";
export default {
  title: "Form/Radio",
  component: RadioInput,
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
        options: ["default", "button"],
      },
    },
  },
} as Meta;

const Template: Story<RadioInputProps> = (args) => <RadioInput {...args} />;

export const SimpleCheckbox = Template.bind({});

SimpleCheckbox.args = {
  disabled: false,
  size: "middle",
  options: [
    {
      key: "a",
      value: "Radio A",
    },
    {
      key: "b",
      value: "Radio B",
    },
    {
      key: "c",
      value: "Radio C",
    },
    {
      key: "d",
      value: "Radio D",
      disabled: true,
    },
  ],
};
