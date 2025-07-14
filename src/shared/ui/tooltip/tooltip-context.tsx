import { createContextScope } from '@/shared/utils'

const createTooltipContext = createContextScope()

export interface TooltipContextValue {
  isShow: boolean
  setIsShow: (hovered: boolean) => void
}

export const [TooltipProvider, useTooltipContext] = createTooltipContext<TooltipContextValue>()
