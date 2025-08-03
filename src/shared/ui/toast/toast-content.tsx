import { motion } from 'framer-motion'

import { IconToastFail, IconToastSuccess } from '@/shared/assets/icons'

import Text from '../text/text'

import type { ReactNode } from 'react'

type ToastType = 'success' | 'error'

interface Props {
  type: ToastType
  children: ReactNode
}

export default function ToastContent({ type, children }: Props) {
  return (
    <motion.div
      className="w-fit py-[0.625rem] px-4 bg-gray-100 text-white rounded-lg z-toast whitespace-nowrap"
      initial={{ scale: 0.95, y: 30, opacity: 0 }}
      animate={{ scale: 1, y: 0, opacity: 0.9 }}
      exit={{ scale: 0.9, y: 30, opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="flex gap-[0.625rem] items-center">
        {type === 'success' ? <IconToastSuccess /> : <IconToastFail />}
        <Text as="span" typography="b2-normal">
          {children}
        </Text>
      </div>
    </motion.div>
  )
}
