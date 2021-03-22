import React from "react";
import { DatePicker } from "antd";
const { RangePicker, TimePicker } = DatePicker;
import styles from "./styles";
export interface DatePickerInputProps {
  /** Wheather is input could be disabled ? */
  disabled?: boolean;
  /** Text Input Type */
  mode?: "default" | "range" | "time";
  /** Placholder of input */
  placeholder?: string;
  /** Show Date and time */
  showTime?: boolean;
  /** Size of Input */
  size?: "small" | "middle" | "large";
  /** Style */
  style?: React.CSSProperties;
  /** Callback fired when the value changes. */
  onChange?: (
    value: Date | [Date, Date],
    event?: React.SyntheticEvent<HTMLElement>
  ) => void;
}

export default function DatePickerInput({
  disabled = false,
  mode = "default",
  onChange = (e: any) => {},
  showTime = false,
  placeholder,
  size,
  style,
}: DatePickerInputProps) {
  const defaulStyle = { ...styles.default, ...style };
  const onChangePicker = (e: any) => {
    onChange(e);
  };
  return mode === "range" ? (
    <RangePicker
      size={size}
      onChange={onChangePicker}
      showTime={showTime}
      style={defaulStyle}
      disabled={disabled}
    />
  ) : mode === "time" ? (
    <TimePicker
      size={size}
      format="hh:mm"
      placeholder={placeholder}
      style={defaulStyle}
      onChange={onChangePicker}
      disabled={disabled}
    />
  ) : (
    <DatePicker
      size={size}
      placeholder={placeholder}
      showTime={showTime}
      style={defaulStyle}
      onChange={onChangePicker}
      disabled={disabled}
      format="DD-mm-yyyy"
    />
  );
}
