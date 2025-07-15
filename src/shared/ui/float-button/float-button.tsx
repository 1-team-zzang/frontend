import { cva, type VariantProps } from 'class-variance-authority'

import { cn, Slot } from '@/shared/utils'

import type { ButtonHTMLAttributes } from 'react'

const FloatButtonVariants = cva('', {
  variants: {
    shape: {
      circle: 'rounded-full',
      square: 'rounded-lg',
    },
    size: {
      small: 'size-8',
      medium: 'size-12',
      large: 'size-16',
    },
  },
  defaultVariants: {
    shape: 'circle',
    size: 'medium',
  },
})

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof FloatButtonVariants> {
  size?: 'small' | 'medium' | 'large'
  shape?: 'circle' | 'square'
  asChild?: boolean
}

export default function FloatButton({ shape, size, children, asChild, className, ...restProps }: Props) {
  const Element = asChild ? Slot : 'button'

  return (
    <Element
      type="button"
      className={cn(
        'bg-gray-20 flex items-center justify-center shadow-md fixed bottom-5 right-4',
        FloatButtonVariants({ shape, size }),
        className,
      )}
      {...restProps}
    >
      {children}
    </Element>
  )
}
