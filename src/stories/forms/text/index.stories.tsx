import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import TextInput, { TextInputProps } from "./index";
export default {
  title: "Form/Text",
  component: TextInput,
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["small", "middle", "large"],
      },
    },
    type: {
      control: {
        type: "select",
        options: ["default", "area", "number", "password"],
      },
    },
  },
} as Meta;

const Template: Story<TextInputProps> = (args) => <TextInput {...args} />;

export const SimpleInput = Template.bind({});

SimpleInput.args = {
  disabled: false,
  placeholder: "Simple Input",
  mode: "default",
};
