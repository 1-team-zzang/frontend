import { useForm, FormProvider, type UseFormProps, type Resolver, type FieldValues } from 'react-hook-form'

import { cn } from '../../utils'

import type { ReactNode } from 'react'

interface Props<T extends FieldValues> extends UseFormProps<T> {
  resolver: Resolver<T>
  children: ReactNode
  // eslint-disable-next-line no-unused-vars
  onSubmit: (_data: T) => void
  className?: string
}

/**
 * @template T - 폼 데이터 타입 (react-hook-form FieldValues 확장)
 * @param {object} props
 * @param {Resolver<T>} props.resolver - zod 스키마를 기반으로 생성한 react-hook-form 유효성 검사 함수
 * @param {ReactNode} props.children - 폼 내부에 렌더링할 자식 컴포넌트 (title, input, field 등)
 * @param {data: T} props.onSubmit - 폼 제출 시 실행되는 함수, 폼 데이터를 인자로 받음
 * @param {string | undefined} props.className - 추가적으로 적용할 CSS 클래스명
 */
export default function Form<T extends FieldValues>({
  resolver,
  onSubmit,
  children,
  className,
  ...restProps
}: Props<T>) {
  const methods = useForm<T>({
    resolver,
    ...restProps,
  })

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className={cn('flex flex-col', className)}>
        {children}
      </form>
    </FormProvider>
  )
}
