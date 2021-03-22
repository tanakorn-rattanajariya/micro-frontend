import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import CheckboxInput, { CheckboxInputProps } from "./index";
export default {
  title: "Form/Checkbox",
  component: CheckboxInput,
  argTypes: {
    mode: {
      control: {
        type: "select",
        options: ["default", "inline"],
      },
    },
  },
} as Meta;

const Template: Story<CheckboxInputProps> = (args) => (
  <CheckboxInput {...args} />
);

export const SimpleCheckbox = Template.bind({});

SimpleCheckbox.args = {
  disabled: false,
  options: [
    {
      key: "a",
      value: "Checkbox A",
    },
    {
      key: "b",
      value: "Checkbox B",
    },
    {
      key: "c",
      value: "Checkbox C",
    },
    {
      key: "d",
      value: "Checkbox D",
      disabled: true,
    },
  ],
};
