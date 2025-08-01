import { type HTMLAttributes } from 'react'

import { cn } from '@/shared/utils'

import useClickOutSide from './use-click-outside'

interface Props extends HTMLAttributes<HTMLDivElement> {
  handleClose: () => void
}

export default function Dropdown({ children, handleClose, className, ...restProps }: Props) {
  const dropDownRef = useClickOutSide(handleClose)

  return (
    <div ref={dropDownRef} className={cn('relative w-fit', className)} {...restProps}>
      {children}
    </div>
  )
}
