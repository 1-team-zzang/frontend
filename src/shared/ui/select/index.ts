import Select from './select'
import SelectContent from './select-content'
import SelectOption from './select-option'
import SelectTrigger from './select-trigger'

const SelectCompound = Object.assign(Select, {
  Trigger: SelectTrigger,
  Content: SelectContent,
  Option: SelectOption,
})

export default SelectCompound
