import { useFormContext } from 'react-hook-form'

import { cn } from '@/shared/utils'

import { useFormFieldContext } from '../form/form-field-context'

import { InputVariants } from './input'

import type { TextareaHTMLAttributes } from 'react'

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name?: string
}

export default function Textarea({ className, name: propName = '', ...restProps }: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const FieldContext = useFormFieldContext()

  const name = FieldContext ? FieldContext.name : (propName as string)

  return (
    <textarea
      className={cn(InputVariants({ isError: !!errors[name]?.message }), 'resize-none', className)}
      {...register(name)}
      id={name}
      {...restProps}
    />
  )
}
