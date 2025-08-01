import Text from '../text/text'

import type { ReactNode } from 'react'
/**
 * @description 드롭다운 메뉴 리스트
 *
 * @param onClick 메뉴 클릭하면 발생할 이벤트, 없다면 드롭다운 닫힘
 *
 * @returns
 *
 * @example
 * <Dropdown.Item onClick={() => alert('프로필 이동')}>
 *   프로필
 * </Dropdown.Item>
 *
 */

interface Props {
  children: ReactNode
  onClick?: () => void
}

export default function DropDownMenuItem({ children, onClick }: Props) {
  return (
    <Text as="li" typography="label" className="cursor-pointer" onClick={onClick}>
      {children}
    </Text>
  )
}
