import { useFormContext } from 'react-hook-form'

import { cn } from '@/shared//utils/cn'

import { useFormFieldContext } from './form-field-context'

import type { InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name?: string
}

export default function FormInput({ className, name: propName = '' }: Props) {
  const { register } = useFormContext()
  const FieldContext = useFormFieldContext()

  const name = FieldContext ? FieldContext.name : (propName as string)

  return <input className={cn('', className)} {...register(name)} id={name} />
}
