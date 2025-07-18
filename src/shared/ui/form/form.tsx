import { FormProvider, type UseFormProps, type FieldValues, type UseFormReturn } from 'react-hook-form'

import { cn } from '../../utils'

import type { ReactNode } from 'react'

interface Props<T extends FieldValues> extends UseFormProps<T> {
  children: ReactNode
  methods: UseFormReturn<T>
  onSubmit: (_data: T) => void
  className?: string
}

/**
 * @template T - 폼 데이터 타입 (react-hook-form FieldValues 확장)
 * @param {object} props
 * @param {UseFormReturn<T>} methods - react-hook-form useForm 훅에서 반환된 메서드와 상태 객체
 * @param {ReactNode} props.children - 폼 내부에 렌더링할 자식 컴포넌트 (title, input, field 등)
 * @param {data: T} props.onSubmit - 폼 제출 시 실행되는 함수, 폼 데이터를 인자로 받음
 * @param {string | undefined} props.className - 추가적으로 적용할 CSS 클래스명
 */
export default function Form<T extends FieldValues>({
  methods,
  onSubmit,
  children,
  className,
  ...restProps
}: Props<T>) {
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className={cn('flex flex-col', className)} {...restProps}>
        {children}
      </form>
    </FormProvider>
  )
}
