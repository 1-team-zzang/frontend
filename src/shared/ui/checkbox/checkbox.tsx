import { cva, type VariantProps } from 'class-variance-authority'

import { IconCheck } from '@/shared/assets/icons'

import Text from '../text/text'

import type { ChangeEvent, InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof checkboxVariants> {
  onCheckedChange?: (e: ChangeEvent<HTMLInputElement>) => void
  textLabel?: string
  checkboxId: string
}

const checkboxVariants = cva(
  'size-5 flex items-center justify-center rounded border border-black transition-colors duration-150',
  {
    variants: {
      checked: {
        true: 'bg-gray-200  cursor-not-allowed',
        false: ' bg-white peer-checked:bg-primary-50 ',
      },
    },
    defaultVariants: {
      checked: false,
    },
  },
)

export default function Checkbox({ onCheckedChange, textLabel, checkboxId, checked, ...restprops }: Props) {
  return (
    <div className="flex items-center gap-2">
      <input
        id={checkboxId}
        type="checkbox"
        className="sr-only peer"
        onChange={(e) => onCheckedChange?.(e)}
        {...restprops}
      />
      <label htmlFor={checkboxId} className={checkboxVariants({ checked })}>
        <IconCheck className="w-[0.625rem] h-[0.375rem] opacity-0 peer-checked:opacity-100 transition-opacity" />
      </label>
      {textLabel && <Text as="span">{textLabel}</Text>}
    </div>
  )
}
