import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/shared/utils/cn'

import Text from '../text/text'

import { useTooltipContext } from './tooltip-context'

import type { HTMLAttributes } from 'react'

const positionVariants = cva('', {
  variants: {
    position: {
      top: 'bottom-10',
      bottom: 'top-10',
    },
    arrowAlign: {
      left: '-left-5',
      center: 'left-1/2 -translate-x-1/2',
      right: '-right-5',
    },
  },
  defaultVariants: {
    position: 'bottom',
    arrowAlign: 'right',
  },
})

const arrowPositionVariants = cva(
  'relative bg-gray-95 rounded-lg p-2.5 w-fit whitespace-nowrap after:block after:absolute after:w-0 after:z-10 after:border-solid',
  {
    variants: {
      arrowPosition: {
        top: 'after:top-[-13px] tooltip-top',
        bottom: 'after:bottom-[-13px] tooltip-bottom',
      },
      arrowAlign: {
        left: 'after:left-[15px]',
        center: 'after:left-1/2 after:-translate-x-1/2',
        right: 'after:right-[15px]',
      },
    },
    defaultVariants: {
      arrowPosition: 'top',
      arrowAlign: 'right',
    },
  },
)

interface Props
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof positionVariants>,
    VariantProps<typeof arrowPositionVariants> {}

export default function TooltipMessage({
  children,
  className,
  position,
  arrowPosition,
  arrowAlign,
  ...restProps
}: Props) {
  const { isVisible: isShow } = useTooltipContext()

  if (!isShow) {
    return null
  }

  return (
    <div className={cn('absolute', positionVariants({ position, arrowAlign }))} {...restProps}>
      <div
        className={cn(arrowPositionVariants({ arrowPosition, arrowAlign }), className)}
        role="tooltip"
        aria-live="polite"
      >
        <Text typography="label" className="text-gray-20">
          {children}
        </Text>
      </div>
    </div>
  )
}
