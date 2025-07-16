import { ErrorMessage } from '@hookform/error-message'
import { useFormContext } from 'react-hook-form'

import { cn } from '@/shared/utils'

import FormErrorMessage from './form-error-message'
import { FormFieldProvider } from './form-field-context'

import type { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  name: string
}

/**
 * <label + input + 에러 메시지> 를 묶은 폼 필드 컴포넌트
 * @param {object} props
 * @param {string} props.name - label과 input을 연결하는 name 속성
 * @param {string | undefined} props.className - 추가적으로 추가할 class
 * @param {React.ReactNode} props.children - label, input, textarea 등 자식 요소
 *
 * @example
 * <FormField name='email'>
 *  <FormLabel>이메일</FormLabel>
 *  <FormInput placeholder='이메일을 입력해주세요' />
 * </FormField>
 *
 * @returns {JSX.Element}
 */
export default function FormField({ name, children, className, ...restProps }: Props) {
  const {
    formState: { errors },
  } = useFormContext()

  return (
    <FormFieldProvider value={{ name }}>
      <div className={cn('', className)} {...restProps}>
        <div className="flex flex-col gap-2">{children}</div>
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => <FormErrorMessage>{message}</FormErrorMessage>}
        />
      </div>
    </FormFieldProvider>
  )
}
