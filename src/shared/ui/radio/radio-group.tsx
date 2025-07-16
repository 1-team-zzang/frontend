import { type HTMLAttributes } from 'react'

import { cn } from '@/shared/utils'

import RadioControlRoot from './radio-control'

interface Props extends HTMLAttributes<HTMLFieldSetElement> {
  name: string
  defaultValue?: string
}

export default function RadioGroup({ name, className, defaultValue, children, ...restProps }: Props) {
  return (
    <RadioControlRoot name={name} defaultValue={defaultValue}>
      <legend className="sr-only">{name}</legend>

      <fieldset className={cn('flex flex-col', className)} role="radiogroup" {...restProps}>
        {children}
      </fieldset>
    </RadioControlRoot>
  )
}
