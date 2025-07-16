import { createContextScope } from '@/shared/utils'

const createTooltipContext = createContextScope()

export interface TooltipContextValue {
  isVisible: boolean
  setIsVisible: (hovered: boolean) => void
  handleVisible: () => void
  handleInvisible: () => void
}

export const [TooltipProvider, useTooltipContext] = createTooltipContext<TooltipContextValue>()
