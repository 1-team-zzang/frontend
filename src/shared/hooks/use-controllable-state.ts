/**
 * 외부에서 제어가 되고있는지 아닌지 파악 여부.
 * 외부 상태 주입과 내부 상태의 동기화
 * 외부 상태(prop)을 받아 내부 상태 관리
 * 외부 상태(onChange)을 받아 내부 상태 업데이트
 *
 */

import { useCallback, useEffect, useRef, useState, type Dispatch, type SetStateAction } from 'react'

import { isFunction } from '../utils/is-function'

interface Params<T> {
  prop?: T
  defaultProp: T
  // eslint-disable-next-line no-unused-vars
  onChange?: (value: T) => void
}

export default function useControllableState<T>({ prop, defaultProp, onChange }: Params<T>) {
  const [unControlledProp, setUnControlledProp, onChangeRef] = useUnControllableState<T>({ defaultProp, onChange })

  const isControlled = prop !== undefined
  const value = isControlled ? prop : unControlledProp

  const setValue = useCallback<Dispatch<SetStateAction<T>>>(
    (nextValue) => {
      if (isControlled) {
        const value = isFunction(nextValue) ? nextValue(prop) : nextValue

        if (value !== prop) {
          onChangeRef.current?.(value)
        }
      } else {
        setUnControlledProp(nextValue)
      }
    },
    [isControlled, onChangeRef, prop, setUnControlledProp],
  )

  return [value, setValue] as const
}

function useUnControllableState<T>({ defaultProp, onChange }: Params<T>) {
  const [value, setValue] = useState<T>(defaultProp)

  const prevValueRef = useRef(value)
  const onChangeRef = useRef(onChange)

  useEffect(() => {
    onChangeRef.current = onChange
  }, [onChange])

  useEffect(() => {
    if (prevValueRef.current !== value) {
      onChangeRef.current?.(value)
      prevValueRef.current = value
    }
  }, [value])

  return [value, setValue, onChangeRef] as const
}
