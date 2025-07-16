import { cn } from '@/shared/utils'

import Text from '../text/text'

import { useFormFieldContext, type FormFieldContextValue } from './form-field-context'

import type { LabelHTMLAttributes } from 'react'

export default function FormLabel({ children, className, ...restProps }: LabelHTMLAttributes<HTMLLabelElement>) {
  const { name } = useFormFieldContext() as FormFieldContextValue

  return (
    <Text
      as="label"
      typography="label"
      htmlFor={name}
      className={cn('text-gray-90 font-semibold', className)}
      {...restProps}
    >
      {children}
    </Text>
  )
}
