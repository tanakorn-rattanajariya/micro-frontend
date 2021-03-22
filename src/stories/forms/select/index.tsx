import React from "react";
import { Select } from "antd";
const { Option } = Select;
import styles from "./styles";
import { OptionProps } from "model/option";
export interface SelectInputProps {
  /** Wheather is input could be disabled ? */
  disabled?: boolean;
  /** Options of checkbox */
  options?: Array<OptionProps>;
  /** Type of checkbox, default is vertical alignment, inline is inline alignment */
  mode?: "multiple" | "tags" | "default";
  /** Searchalble select */
  showSearch?: boolean;
  /** Size of Input */
  size?: "small" | "middle" | "large";
  /** Placholder of input */
  placeholder?: string;
  /** Loading factor to check is loadding indicator on the right hand appear? */
  loading?: boolean;
  /** Style */
  style?: React.CSSProperties;
  /** Callback fired when the value changes. */
  onChange?: (value: string | Array<string>) => void;
}
export default function SelectInput({
  disabled = false,
  options,
  mode,
  onChange,
  size,
  placeholder = "Please Select an option",
  showSearch = true,
  loading,
  style,
}: SelectInputProps) {
  const onChangeSelect = (value: string | Array<string>) => {
    onChange && onChange(value);
  };
  const onFilter = (input: string, option: any) => {
    return (
      (option.children &&
        typeof option.children === "string" &&
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0) ||
      (option.key || "").toLowerCase().indexOf(input.toLocaleLowerCase()) >= 0
    );
  };
  const defaultStyle = { ...styles.default, ...style };
  return (
    <Select
      style={defaultStyle}
      size={size}
      disabled={disabled}
      placeholder={placeholder}
      mode={mode === "default" ? undefined : mode}
      showSearch={showSearch}
      allowClear
      onChange={onChangeSelect}
      loading={loading ? true : false}
      filterOption={onFilter}
    >
      {(options || []).map(({ key, value, disabled }) => (
        <Option disabled={disabled} key={key} value={key}>
          {value}
        </Option>
      ))}
    </Select>
  );
}
