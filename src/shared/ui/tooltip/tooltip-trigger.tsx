import { useTooltipContext } from './tooltip-context'

import type { ButtonHTMLAttributes } from 'react'

export default function TooltipTrigger({ children }: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { setIsShow } = useTooltipContext()

  const handleTooltipOpen = () => {
    setIsShow(true)
  }

  const handleTooltipClose = () => {
    setIsShow(false)
  }

  return (
    <button
      type="button"
      onClick={handleTooltipOpen}
      onMouseEnter={handleTooltipOpen}
      onMouseLeave={handleTooltipClose}
    >
      {children}
    </button>
  )
}
