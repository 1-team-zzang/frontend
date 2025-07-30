import { cva, type VariantProps } from 'class-variance-authority'
import { AnimatePresence, motion } from 'framer-motion'

import Text from '../text/text'

import type { ReactNode } from 'react'

const toastVariants = cva(
  'w-fit py-[0.625rem] px-4 bg-gray-100 text-white rounded-lg z-toast whitespace-nowrap opacity-0.8',
  {
    variants: {
      type: {
        success: '',
        error: '',
      },
    },
    defaultVariants: {
      type: 'success',
    },
  },
)
interface Props extends VariantProps<typeof toastVariants> {
  children: ReactNode
}

export default function ToastContent({ type, children }: Props) {
  return (
    <AnimatePresence>
      <motion.div
        className={toastVariants({ type })}
        initial={{ scale: 0.95, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 30 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <Text as="span" typography="b2-normal">
          {children}
        </Text>
      </motion.div>
    </AnimatePresence>
  )
}
