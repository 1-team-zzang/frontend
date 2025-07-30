import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/shared/utils'

import type { ReactNode } from 'react'

interface Props extends VariantProps<typeof ToastVariants> {
  children: ReactNode
}
const ToastVariants = cva('left-1/2 -translate-x-1/2 w-fit bg-gray-100 p-[0.625rem] rounded-lg z-toast', {
  variants: {
    position: {
      top: '',
      bottom: 'fixed bottom-2',
      right: '',
      left: '',
    },
  },
  defaultVariants: {
    position: 'bottom',
  },
})
export default function ToastContainer({ children, position }: Props) {
  return <div className={cn(ToastVariants({ position }))}>{children}</div>
}
