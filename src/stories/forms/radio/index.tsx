import React from "react";
import { Radio } from "antd";
import { OptionProps } from "model/option";
const { Group } = Radio;
import styles from "./styles";
export interface RadioInputProps {
  /** Wheather is input could be disabled ? */
  disabled?: boolean;
  /** Options of checkbox */
  options?: Array<OptionProps>;
  /** Type of checkbox, default is vertical alignment, inline is inline alignment */
  mode?: "default" | "button";

  /** Size of Input */
  size?: "small" | "middle" | "large";
  /** Style */
  style?: React.CSSProperties;
  /** Callback fired when the value changes. */

  onChange?: (
    value: string | number,
    event?: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

export default function RadioInput({
  disabled = false,
  options,
  mode = "default",
  onChange,
  size = "middle",
  style,
}: RadioInputProps) {
  const onChangeRadio = (e: any) => {
    onChange && onChange(e?.target?.value || "", e);
  };
  return (
    <Group
      size={size}
      options={(options || []).map(({ key, value }) => ({
        value: key,
        label: value,
      }))}
      onChange={onChangeRadio}
      optionType={mode}
      buttonStyle="solid"
      disabled={disabled}
      style={style}
    />
  );
}
