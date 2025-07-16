import { cva } from 'class-variance-authority'

import { cn } from '@/shared/utils'

import Text from '../text/text'

import { useRadioContext } from './radio-context'

import type { InputHTMLAttributes } from 'react'

const radioVariants = cva('size-6 rounded-full border border-gray-400 flex items-center justify-center', {
  variants: {
    checked: {
      true: 'border-primary-600 bg-primary-600',

      false: 'bg-white',
    },

    disabled: {
      true: 'border-gray-60 bg-gray-10 cursor-not-allowed',

      false: '',
    },
  },

  defaultVariants: {
    checked: false,

    disabled: false,
  },
})

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  value: string
}

export default function Radio({ value, children, disabled, ...restProps }: Props) {
  const { name, selectedValue, setSelectedValue } = useRadioContext()

  const checked = value === selectedValue

  return (
    <Text as="label" typography="b2-normal" className="flex gap-3 items-center">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => setSelectedValue(value)}
        disabled={disabled}
        className="sr-only"
        {...restProps}
      />

      <span className={cn(radioVariants({ checked, disabled }))}>
        {<span className={cn('w-4 h-4 rounded-full', checked ? 'bg-primary-50' : 'bg-gray-10')} />}
      </span>

      {children}
    </Text>
  )
}
