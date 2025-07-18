import { cva } from 'class-variance-authority'
import { type InputHTMLAttributes } from 'react'

import { IconCheck } from '@/shared/assets/icons'
import { useControllableState } from '@/shared/hooks'
import { cn } from '@/shared/utils'

import Text from '../text/text'

const CheckboxVariants = cva('size-5 border rounded flex items-center justify-center', {
  variants: {
    checked: {
      true: '',
      false: '',
    },

    disabled: {
      true: '',
      false: '',
    },
  },

  defaultVariants: {
    checked: false,
    disabled: true,
  },

  compoundVariants: [
    {
      checked: false,
      disabled: false,
      class: 'border-black bg-white',
    },
    {
      checked: true,
      disabled: false,
      class: 'border-black bg-primary-50',
    },
    {
      checked: false,
      disabled: true,
      class: 'border-gray-30 bg-gray-10 text-gray-60 cursor-not-allowed',
    },
    {
      checked: true,
      disabled: true,
      class: 'border-gray-40 bg-gray-30 text-gray-60 cursor-not-allowed',
    },
  ],
})

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'checked' | 'defaultChecked' | 'onChange'> {
  textLabel?: string //체크박스 옆에 텍스트
  checked?: boolean //외부상태 체크여부
  defaultChecked?: boolean //체크박스 초기값
  onCheckedChange?: (checked: boolean) => void //체크박스 체크여부 변경되었을때 실행
}

export default function Checkbox({
  disabled,
  checked,
  defaultChecked = false,
  onCheckedChange,
  textLabel = '',
  ...restProps
}: Props) {
  const [isChecked, setIsChecked] = useControllableState<boolean>({
    prop: checked,
    defaultProp: defaultChecked,
    onChange: onCheckedChange,
  })

  const toggleCheck = () => {
    setIsChecked((prev) => !prev)
  }

  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={toggleCheck}
        disabled={disabled}
        className="sr-only"
        {...restProps}
      />

      <span className={cn(CheckboxVariants({ checked: isChecked, disabled }))}>
        {isChecked && <IconCheck className={cn({ 'text-gray-40': disabled })} />}
      </span>

      <Text as="span" typography="b2-normal" className={cn(disabled ? 'text-gray-60' : 'text-black')}>
        {textLabel}
      </Text>
    </label>
  )
}
