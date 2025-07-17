import { cva, type VariantProps } from 'class-variance-authority'

import Text from '../text/text'

import type { ChangeEvent, InputHTMLAttributes } from 'react'

/**
 * @param onCheckedChange 체크박스의 상태가 변경될 때 호출되는 함수
 * @param textLabel 체크박스 옆에 표시될 텍스트
 * @param checkboxId textLabel 있을시 input과 연결
 *
 */

interface Props extends InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof checkboxVariants> {
  onCheckedChange?: (e: ChangeEvent<HTMLInputElement>) => void
  textLabel?: string
  checkboxId?: string
}

const checkboxVariants = cva('w-5 h-5 rounded border border-black cursor-pointer', {
  variants: {},
})

export default function Checkbox({ onCheckedChange, textLabel, checkboxId, ...restprops }: Props) {
  return (
    <div className="flex">
      <input
        id={checkboxId}
        type="checkbox"
        onChange={(e) => {
          if (onCheckedChange) {
            onCheckedChange(e)
          }
        }}
        className={checkboxVariants()}
        {...restprops}
      />
      {textLabel && (
        <label htmlFor={checkboxId}>
          <Text as="span">{textLabel}</Text>
        </label>
      )}
    </div>
  )
}
