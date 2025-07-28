import { cva } from 'class-variance-authority'

import { cn } from '@/shared/utils/cn'

import type { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  disabled?: boolean
}

const appointmentCardVariants = cva('w-full rounded-[0.625rem] border border-gray-20 overflow-hidden p-6 relative', {
  variants: {
    disabled: {
      true: 'opacity-50',
      false: 'opacity-100',
    },
  },
})

export default function AppointmentCard({ children, className, disabled = false }: Props) {
  return <div className={cn(appointmentCardVariants({ disabled }), className)}>{children}</div>
}
