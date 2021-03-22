import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import DatePickerInput, { DatePickerInputProps } from "./index";
export default {
  title: "Form/Date",
  component: DatePickerInput,
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["small", "middle", "large"],
      },
    },
    mode: {
      size: {
        control: {
          type: "select",
          options: ["small", "middle", "large"],
        },
      },
      control: {
        type: "select",
        options: ["default", "range", "time"],
      },
    },
  },
} as Meta;

const Template: Story<DatePickerInputProps> = (args) => (
  <DatePickerInput {...args} />
);

export const SimpleInput = Template.bind({});

SimpleInput.args = {
  disabled: false,
  mode: "default",
  showTime: false,
  placeholder: "Select Time",
};
