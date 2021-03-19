import React from "react";
import { Form, Typography } from "antd";
const { Text } = Typography;
const { Item } = Form;

export interface LayoutItemProps {
  /** Left Column style number could be 1 - 24 */
  offset: number;
  /** Right Column style number could be 1 - 24 */
  span: number;
}
export interface LayoutProps {
  /** Column value left , right */
  wrapperCol: LayoutItemProps;
}
export interface FormItemProps {
  /** Text on left col */
  label?: string;
  /** layout of form */
  layout?: LayoutProps;
  /** Check if this form is required to answer */
  required?: boolean;
  /** Name of Form, used for naming of form item */
  name: string;
}

/**
 * Display a FormItem component for handling form item
 */
export default function FormItem({
  label,
  layout = { wrapperCol: { offset: 8, span: 16 } },
  name,
  required = false,
  ...props
}: FormItemProps) {
  return (
    <Item
      name={name}
      key={name}
      {...layout}
      rules={[{ required: required }]}
      label={label && <Text strong>{label}</Text>}
    ></Item>
  );
}
