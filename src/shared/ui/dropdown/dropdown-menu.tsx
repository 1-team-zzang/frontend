import { cva, type VariantProps } from 'class-variance-authority'

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

const dropDownMenuVariants = cva(
  'p-2 flex flex-col bg-white shadow-xl text-gray-80 text-center rounded-2xl animate-dropdown gap-2 z-dropdown absolute',
  {
    variants: {
      position: {
        right: 'right-0',
        center: 'left-1/2 -translate-x-1/2',
        lift: 'left-0',
      },
    },
    defaultVariants: {
      position: 'right',
    },
  },
)

export default function DropDownMenu({ children, position }: Props) {
  return <ul className={dropDownMenuVariants({ position })}>{children}</ul>
}
