import { cva, type VariantProps } from 'class-variance-authority'

import { useDropdownContext } from './use-dropdown-context'

import type { ReactNode } from 'react'
/**
 * @description 드롭다운 메뉴박스
 *
 * @param size 드롭다운 메뉴박스의 크기 ( 지정하지 않으면 'sm' | 'lg' )
 *
 * @returns
 *
 * @example
 * <Dropdown.Menu size="lg">
 *   <Dropdown.Item>목록1</Dropdown.Item>
 *   <Dropdown.Item>목록2</Dropdown.Item>
 * </Dropdown.Menu>
 *
 */

interface Props extends VariantProps<typeof dropDownMenuVariants> {
  children: ReactNode
}

const dropDownMenuVariants = cva('flex flex-col absolute animate-dropdown gap-2 p-4', {
  variants: {
    size: {
      sm: 'w-24',
      lg: 'w-48',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
})

export default function DropDownMenu({ children, size }: Props) {
  const { isOpen } = useDropdownContext()
  if (!isOpen) {
    return null
  }
  return <ul className={dropDownMenuVariants({ size })}>{children}</ul>
}
