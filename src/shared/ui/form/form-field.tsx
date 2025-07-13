import { useFormContext } from 'react-hook-form'

import { cn } from '../../utils'

import FormErrorMessage from './form-error-message'
import FormLabel from './form-label'

import type { ReactNode } from 'react'

interface Props {
  name: string
  label: string
  children: ReactNode
  className?: string
}

/**
 * <label + input + 에러 메시지> 를 묶은 폼 필드 컴포넌트
 * @param {object} props
 * @param {string} props.name - label과 input을 연결하는 name 속성
 * @param {string} props.label - label에 표시될 텍스트
 * @param {string | undefined} props.className - 추가적으로 추가할 class
 * @param {React.ReactNode} props.children - input, textarea 등 자식 요소
 *
 * @example
 * <FormField name='email' label='이메일'>
 *      <FormInput name='email' placeholder='이메일을 입력해주세요' />
 * </FormField>
 *
 * @returns {JSX.Element}
 */
export default function FormField({ name, label, children, className }: Props) {
  const {
    formState: { errors },
  } = useFormContext()

  const errorMessage = errors[name]?.message ? String(errors[name].message) : undefined

  return (
    <>
      <div className={cn('flex flex-col gap-2', className)}>
        <FormLabel name={name}>{label}</FormLabel>
        {children}
      </div>
      {errorMessage && <FormErrorMessage message={errorMessage} />}
    </>
  )
}
