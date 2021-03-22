import React from "react";
import { Checkbox } from "antd";
import { OptionProps } from "model/option";
const { Group } = Checkbox;
import styles from "./styles";
import "./checkbox.css";
export interface CheckboxInputProps {
  /** Wheather is input could be disabled ? */
  disabled?: boolean;
  /** Options of checkbox */
  options?: Array<OptionProps>;
  /** Type of checkbox, default is vertical alignment, inline is inline alignment */
  mode?: "default" | "inline";
  /** Style */
  style?: React.CSSProperties;
  /** Callback fired when the value changes. */
  onChange?: (value: Array<string>) => void;
}

export default function CheckboxInput({
  disabled = false,
  options,
  mode = "default",
  onChange,
  style,
}: CheckboxInputProps) {
  const onChangeCheckbox = (event: any) => {
    onChange && onChange(event);
  };
  const styleGroupDefault = {
    ...style,
    ...styles.groupDefault,
  };
  return (
    <Group
      style={styleGroupDefault}
      onChange={onChangeCheckbox}
      disabled={disabled}
    >
      {(options || []).map(({ key, value, disabled }) => (
        <Checkbox
          style={styles[mode]}
          disabled={disabled}
          value={key}
          key={key}
        >
          {value}
        </Checkbox>
      ))}
    </Group>
  );
}
