import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import NForm, { FormProps } from "./index";
export default {
  title: "Form/Form",
  component: NForm,
} as Meta;

const Template: Story<FormProps> = (args) => {
  return <NForm {...args} />;
};

export const ItemExample = Template.bind({});
ItemExample.args = {
  onSubmit: (values) => {
    console.log(values);
  },
  onDelete: () => {},
  button: {
    label: "Submit",
    type: "default",
  },
  items: [
    {
      name: "username",
      label: "Username",
      item: {
        type: "text",
      },
      required: true,
    },
    {
      name: "password",
      label: "Password",
      item: {
        type: "text",
        mode: "password",
      },
    },
    {
      name: "gender",
      label: "Gender",
      item: {
        type: "radio",
        options: [
          { key: "m", value: "Male" },
          { key: "f", value: "Female" },
        ],
      },
    },
    {
      name: "country",
      label: "Country",
      item: {
        type: "select",
        options: [
          { key: "th", value: "Thailand" },
          { key: "us", value: "America" },
        ],
      },
    },
    {
      name: "occupation",
      label: "Occupation",
      item: {
        type: "checkbox",
        options: [
          { key: "sport", value: "Playing Sport" },
          { key: "read", value: "Reading book" },
        ],
      },
    },
    {
      name: "dob",
      label: "Date of Birth",
      item: {
        type: "date",
      },
    },
  ],
};
