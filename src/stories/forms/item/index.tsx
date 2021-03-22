import React from "react";
import { Form, Typography } from "antd";
import { OptionProps } from "model/option";
import CheckBoxInput, { CheckboxInputProps } from "../checkbox/index";
import SelectInput, { SelectInputProps } from "../select/index";
import DatePickerInput, { DatePickerInputProps } from "../datepicker/index";
import RadioInput, { RadioInputProps } from "../radio/index";
import TextInput, { TextInputProps } from "../text/index";
const { Text } = Typography;
const { Item } = Form;

export interface FormItemAttribute
  extends SelectInputProps,
    CheckboxInputProps,
    DatePickerInputProps,
    RadioInputProps,
    TextInputProps {
  onChange?: any;
  mode?: any;
  type: "checkbox" | "select" | "date" | "radio" | "text";
}
export interface FormItemProps {
  /** Text on left col */
  label?: string;
  /** Check if this form is required to answer */
  required?: boolean;
  /** Name of Form, used for naming of form item */
  name: string;
  /** Form individual item */
  item: FormItemAttribute;
}

/**
 * Display a FormItem component for handling form item
 */
export default function FormItem({
  label,
  name,
  required = false,
  item,
}: FormItemProps) {
  const { type } = item;
  return (
    <Item
      name={name}
      key={name}
      rules={[{ required: required }]}
      label={label && <Text strong>{label}</Text>}
    >
      {type === "text" ? (
        <TextInput {...item} />
      ) : type === "checkbox" ? (
        <CheckBoxInput {...item} />
      ) : type === "select" ? (
        <SelectInput {...item} />
      ) : type === "date" ? (
        <DatePickerInput {...item} />
      ) : type === "radio" ? (
        <RadioInput {...item} />
      ) : null}
    </Item>
  );
}
