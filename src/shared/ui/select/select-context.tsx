import { createContext } from 'react'

export interface SelectContextType {
    isOpen: boolean
    toggleOpen: () => void
    selectedValue: string | null
    selectValue: (value: string) => void
}

const SelectContext = createContext<SelectContextType | undefined>(undefined)
export default SelectContext
