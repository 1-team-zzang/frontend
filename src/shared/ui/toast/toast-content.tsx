import { cva, type VariantProps } from 'class-variance-authority'

import Text from '../text/text'

import type { ReactNode } from 'react'

const toastVariants = cva('w-fit py-[0.625rem] px-4 bg-gray-100 text-white rounded-lg z-toast', {
  variants: {
    type: {
      success: '',
      error: '',
    },
  },
  defaultVariants: {
    type: 'success',
  },
})
interface Props extends VariantProps<typeof toastVariants> {
  children: ReactNode
}

export default function ToastContent({ type, children }: Props) {
  return (
    <div className={toastVariants({ type })}>
      <Text as="span" typography="b2-normal">
        {children}
      </Text>
    </div>
  )
}
