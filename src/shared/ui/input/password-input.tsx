import { useState, type InputHTMLAttributes } from 'react'

import { IconVisibilityOff, IconVisibilityOn } from '@/shared/assets/icons'

import Input from './input'

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'placeholder'> {
  mode?: 'password' | 'confirm'
}

export default function PasswordInput({ mode = 'password', ...restProps }: Props) {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  return (
    <div className="relative">
      <Input
        type={showPassword ? 'text' : 'password'}
        placeholder={mode === 'password' ? '비밀번호를 입력해주세요' : '비밀번호를 다시 한 번 입력해주세요'}
        {...restProps}
      />
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2"
        type="button"
        aria-label={showPassword ? '비밀번호 숨기기' : '비밀번호 보기'}
        onClick={() => setShowPassword((prev) => !prev)}
      >
        {showPassword ? <IconVisibilityOn /> : <IconVisibilityOff />}
      </button>
    </div>
  )
}
