import { type ReactNode } from 'react'

import useClickOutSide from './use-click-outside'

interface Props {
  children: ReactNode
  handleClose: () => void
}

export default function Dropdown({ children, handleClose }: Props) {
  const dropDownRef = useClickOutSide(handleClose)

  return (
    <div ref={dropDownRef} className="relative">
      {children}
    </div>
  )
}
