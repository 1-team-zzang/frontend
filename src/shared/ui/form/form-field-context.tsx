import { createContextScope } from '@/shared/utils'

const createFormFieldContext = createContextScope()

export interface FormFieldContextValue {
  name: string
}

const [FormFieldProvider, _useFormFieldContext] = createFormFieldContext<FormFieldContextValue>()

function useFormFieldContext(): FormFieldContextValue | null {
  try {
    return _useFormFieldContext()
  } catch {
    return null
  }
}

// eslint-disable-next-line react-refresh/only-export-components
export { FormFieldProvider, useFormFieldContext }

// NOTE context 밖에서 사용할 경우 에러를 반환하는게 아닌 null을 반환받고 싶어서 이렇게 처리했는데 문제가 될까요 ??
