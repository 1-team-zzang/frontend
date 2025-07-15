import useSelectContext from '../../hooks/use-select-context'

import type { ButtonHTMLAttributes } from 'react'

export default function SelectTrigger(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { toggleOpen } = useSelectContext()

  return (
    <button type='button' onClick={toggleOpen} {...props} />
  )
}
