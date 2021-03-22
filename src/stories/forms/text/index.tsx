import React from "react";
import { Input, InputNumber } from "antd";
const { TextArea, Password } = Input;
import styles from "./styles";
export interface TextInputProps {
  /** Wheather is input could be disabled ? */
  disabled?: boolean;
  /** Placholder of input */
  placeholder?: string;
  /** Size of Input */
  size?: "small" | "middle" | "large";
  /** Text Input Type */
  mode?: "default" | "area" | "number" | "password";
  /** Style */
  style?: React.CSSProperties;
  /** Callback fired when the value changes. */
  onChange?: (
    value: string | number,
    event?: React.SyntheticEvent<HTMLElement>
  ) => void;
}

export default function TextInput({
  disabled = false,
  placeholder,
  mode = "default",
  onChange,
  size,
  style,
}: TextInputProps) {
  const onChangeTextArea = (e: any) => {
    onChange && onChange(e?.target?.value || "", e);
  };
  const onChangeInputNumber = (value: number) => {
    onChange && onChange(value, undefined);
  };
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e?.target?.value || "", e);
  };
  const defaultStyle = { ...styles.default, style };
  return mode === "area" ? (
    <TextArea
      size={size}
      onChange={onChangeTextArea}
      placeholder={placeholder}
      style={defaultStyle}
      disabled={disabled}
    />
  ) : mode === "number" ? (
    <InputNumber
      size={size}
      onChange={onChangeInputNumber}
      style={defaultStyle}
      disabled={disabled}
    />
  ) : mode === "password" ? (
    <Password
      size={size}
      onChange={onChangeInput}
      placeholder={placeholder}
      disabled={disabled}
      style={defaultStyle}
    />
  ) : (
    <Input
      size={size}
      onChange={onChangeInput}
      placeholder={placeholder}
      disabled={disabled}
      style={defaultStyle}
    ></Input>
  );
}
