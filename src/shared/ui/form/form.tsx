import { useForm, FormProvider, type UseFormProps, type Resolver, type FieldValues } from 'react-hook-form'

import { cn } from '../../utils'

import type { ReactNode } from 'react'

interface Props<T extends FieldValues> extends UseFormProps<T> {
  children: ReactNode
  resolver: Resolver<T>
  // eslint-disable-next-line no-unused-vars
  onSubmit: (_data: T) => void
  className?: string
}

export default function Form<T extends FieldValues>({
  onSubmit,
  children,
  className,
  resolver,
  ...restProps
}: Props<T>) {
  const methods = useForm<T>({
    resolver,
    ...restProps,
  })

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className={cn('fles flex-col', className)}>
        {children}
      </form>
    </FormProvider>
  )
}
