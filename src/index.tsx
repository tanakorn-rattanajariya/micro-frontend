import CheckboxInput from "./stories/forms/checkbox/index";
import DatePickerInput from "./stories/forms/datepicker/index";
import NForm from "./stories/forms/form/index";
import FormItem from "./stories/forms/item/index";
import RadioInput from "./stories/forms/radio/index";
import SelectInput from "./stories/forms/select/index";
import TextInput from "./stories/forms/text/index";
const templar = {
  Checkbox: CheckboxInput,
  DatePicker: DatePickerInput,
  Form: NForm,
  FormItem: FormItem,
  Radio: RadioInput,
  Select: SelectInput,
  Input: TextInput,
};
export default templar;
