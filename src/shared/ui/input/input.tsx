import { cva } from 'class-variance-authority'
import { useFormContext } from 'react-hook-form'

import { useFormFieldContext } from '@/shared/ui/form/form-field-context'
import { cn } from '@/shared/utils/cn'

import type { InputHTMLAttributes } from 'react'

export const InputVariants = cva(
  'w-full bg-gray-1 rounded-[0.25rem] px-4 py-2.5 placeholder-gray-40 text-gray-95 focus:outline focus:outline-gray-95 text-base leading-[1.6] tracking-[-0.64px]',
  {
    variants: {
      isError: {
        true: 'outline outline-system-warning focus:outline-system-warning',
        false: '',
      },
    },
    defaultVariants: {
      isError: false,
    },
  },
)

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string
}

export default function Input({ className, name: propName = '', ...restProps }: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const FieldContext = useFormFieldContext()

  const name = FieldContext ? FieldContext.name : (propName as string)

  return (
    <input
      className={cn(InputVariants({ isError: !!errors[name]?.message }), className)}
      {...register(name)}
      id={name}
      {...restProps}
    />
  )
}
