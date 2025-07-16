import useSelectContext from '../../hooks/use-select-context'

import type { HTMLAttributes, KeyboardEvent } from 'react'

interface Props extends HTMLAttributes<HTMLLIElement> {
    value: string
}

export default function SelectOption({ value, children, ...props } : Props) {
  const { selectValue, selectedValue } = useSelectContext()

  const handleClick = () => {
    selectValue(value)
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick()
    }
  }

  return (
    <li role='option' aria-selected={selectedValue === value} tabIndex={0} onClick={handleClick} onKeyDown={handleKeyDown} {...props}>{children}</li>
  )
}
