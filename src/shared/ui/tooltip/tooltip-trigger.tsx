import { useTooltipContext } from './tooltip-context'

import type { ButtonHTMLAttributes } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function TooltipTrigger({ children, ...restProps }: Props) {
  const { handleInvisible, handleVisible } = useTooltipContext()

  return (
    <button
      type="button"
      onClick={handleVisible}
      onMouseEnter={handleVisible}
      onMouseLeave={handleInvisible}
      {...restProps}
    >
      {children}
    </button>
  )
}
