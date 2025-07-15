import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/shared/utils'

import type { HTMLAttributes } from 'react'

const textVariants = cva('', {
  variants: {
    textStyle: {
      'title-heading': 'font-bold text-[2rem] leading-[1.4] tracking-[-0.08rem]',
      'title-normal': 'font-normal text-[2rem] leading-[1.4] tracking-[-0.08rem]',
      'h1-heading': 'font-bold text-2xl leading-[1.4] tracking-[-0.06rem]',
      'h1-normal': 'font-normal text-2xl leading-[1.4] tracking-[-0.06rem]',
      'h2-heading': 'font-semibold text-xl leading-[1.6] tracking-[-0.05rem]',
      'h2-normal': 'font-normal text-xl leading-[1.6] tracking-[-0.05rem]',
      'b1-heading': 'font-semibold text-lg leading-[1.6] tracking-[-0.045rem]',
      'b1-normal': 'font-normal text-lg leading-[1.6] tracking-[-0.045rem]',
      'b2-heading': 'font-bold text-base leading-[1.6] tracking-[-0.04rem]',
      'b2-normal': 'font-normal text-base leading-[1.6] tracking-[-0.04rem]',
      label: 'font-normal text-sm leading-[1.6] tracking-[-0.035rem]',
      caption: 'font-normal text-xs leading-[1.3] tracking-[-0.015rem]',
      'caption-10': 'font-normal text-[0.625rem] leading-[1.3] tracking-[-0.015rem]',
    },
  },
  defaultVariants: {
    textStyle: 'b1-normal',
  },
})

interface Props extends HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof textVariants> {}

export default function Text({ textStyle, children, className, ...restProps }: Props) {
  return (
    <p className={cn(textVariants({ textStyle }), className)} {...restProps}>
      {children}
    </p>
  )
}
