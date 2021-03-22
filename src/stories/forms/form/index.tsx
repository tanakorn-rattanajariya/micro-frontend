import React from "react";
import { Form, Button, Popconfirm } from "antd";
const { Item } = Form;
import styles from "./styles";
import FormItem, { FormItemProps } from "../item/index";
export type LayoutItemProps = {
  /** Right Column style number could be 1 - 24 */
  span: number;
};
export type LayoutProps = {
  /** Column value left , right */
  wrapperCol: LayoutItemProps;
  labelCol: LayoutItemProps;
};
type FormValues = {
  T: any;
};
type ButtonFormProps = {
  /** Button Label */
  label?: string;
  /** type of Button */
  type?: "text" | "link" | "ghost" | "primary" | "dashed" | "default";
  /** Button Size */
  size?: "small" | "middle" | "large";
  /** Button Loading */
  loading?: boolean;
  /** Button icon */
  icon?: React.ReactNode;
};
export interface FormProps {
  /** Form Reference */
  rf?: React.RefObject<any>;
  /** Form Layout left, right , default is 8 : 16 */
  layout?: LayoutProps;
  /** Form Item inside Form */
  items?: Array<FormItemProps>;
  /** Button Style in NForm */
  button?: ButtonFormProps;
  /** Form Submit Button */
  onSubmit?: (values: FormValues) => void;
  /** Form Delete Button */
  onDelete?: () => void;
}
function SubmitButton({ onClickSubmit, button }: any) {
  return (
    <Button style={styles.defaultButton} {...button} onClick={onClickSubmit}>
      {button.label}
    </Button>
  );
}
function DeleteButton({ onDelete, button }: any) {
  return (
    <Popconfirm
      title="Are you sure to Delete?"
      onConfirm={onDelete}
      okText="Confirm"
      cancelText="No"
    >
      <Button
        type="primary"
        size={button?.size}
        style={styles.defaultButton}
        danger
      >
        Delete
      </Button>
    </Popconfirm>
  );
}

/**
 * Display a FormItem component for handling form item
 */
export default function NForm({
  rf,
  layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  },
  items,
  button,
  onSubmit,
  onDelete,
}: FormProps) {
  const ref = rf || React.useRef();
  const tail = {
    wrapperCol: { offset: layout.labelCol.span, span: layout.wrapperCol.span },
  };
  const onClickSubmit = async () => {
    await ref.current.validateFields();
    onSubmit && onSubmit(ref?.current?.getFieldsValue());
  };
  return (
    <Form {...layout} ref={ref}>
      {(items || []).map((value) => (
        <FormItem key={value.name} {...value} />
      ))}
      {button && (
        <Item {...tail}>
          {onSubmit && (
            <SubmitButton onClickSubmit={onClickSubmit} button={button} />
          )}
          {onDelete && <DeleteButton onDelete={onDelete} button={button} />}
        </Item>
      )}
    </Form>
  );
}
