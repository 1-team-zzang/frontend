import { cva, type VariantProps } from 'class-variance-authority'
import { useDropdownContext } from './hooks/useDropDownContext'
/**
 * @description 드롭다운 메뉴박스
 *
 * @param width 드롭다운 메뉴박스의 width
 * @param rounded 모서리
 * @param bg 배경색
 * @param border 테두리색
 * 지정 안하면 디폴트값 적용
 *
 * @returns
 *
 * @example
 * <Dropdown.Menu width="full" rounded="lg" bg="gray" border="gray">
 *   <Dropdown.Item>목록1</Dropdown.Item>
 *   <Dropdown.Item>목록2</Dropdown.Item>
 * </Dropdown.Menu>
 *
 */

interface Props extends VariantProps<typeof dropDownMenuVariants> {
  children: React.ReactNode
}

const dropDownMenuVariants = cva('flex flex-col absolute animate-dropdown gap-2 p-4', {
  variants: {
    size: {
      sm: 'w-24',
      lg: 'w-auto',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
})

export default function DropDownMenu({ children, size }: Props) {
  const { isOpen } = useDropdownContext()
  if (!isOpen) return null
  return <ul className={dropDownMenuVariants({ size })}>{children}</ul>
}
