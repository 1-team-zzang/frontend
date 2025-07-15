import { cva } from 'class-variance-authority'

import { cn } from '@/shared/utils'

import { useSwitchContext } from './switch-context'

const triggerVariants = cva('w-5 h-5 rounded-full bg-gray-0 block transition-transform duration-200', {
  variants: {
    variant: {
      true: 'translate-x-full',
      false: 'translate-x-0',
    },
  },
  defaultVariants: {
    variant: false,
  },
})

export default function SwitchTrigger() {
  const { isChecked, setIsChecked } = useSwitchContext()

  return (
    <label className="rounded-full bg-gray-100 p-1 w-12 h-8 flex items-center cursor-pointer" htmlFor="switch-trigger">
      <input
        type="checkbox"
        className="sr-only"
        id="switch-trigger"
        role="switch"
        aria-checked={isChecked}
        aria-label="Switch"
        onChange={() => setIsChecked(!isChecked)}
        checked={isChecked}
      />
      <span className={cn(triggerVariants({ variant: isChecked }))} />
    </label>
  )
}
