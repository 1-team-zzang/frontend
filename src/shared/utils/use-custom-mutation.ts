// hooks/useCustomMutation.ts
import { useMutation } from '@tanstack/react-query'

import { devLog } from './dev-log'

import type { UseMutationOptions, UseMutationResult } from '@tanstack/react-query'

type MutationFn<TArgs, TResponse> = (args: TArgs) => Promise<TResponse>

/**
 * React Query의 useMutation 훅을 추상화한 커스텀 훅
 *
 * @template TArgs - mutation 함수에 전달되는 인자 타입
 * @template TResponse - mutation 함수의 응답 타입
 *
 * @param {MutationFn<TArgs, TResponse>} mutationFn - 비동기 mutation 함수
 * @param {UseMutationOptions<TResponse, Error, TArgs>} [options] - useMutation에 전달할 선택적 옵션
 *
 * @returns {UseMutationResult<TResponse, Error, TArgs>} - mutation 상태 및 메서드를 포함한 객체
 *
 * @example
 * // 성공, 실패 처리가 따로 없다면
 * const mutation = useCustomMutation(loginAPI)
 *
 * // 성공, 실패 처리가 따로 있다면
 * const mutation = useCustomMutation(loginAPI, {
 *   onSuccess: () => { ... },
 *   onError: () => { ... }
 * })
 */
export function useCustomMutation<TArgs, TResponse>(
  mutationFn: MutationFn<TArgs, TResponse>,
  options?: UseMutationOptions<TResponse, Error, TArgs>,
): UseMutationResult<TResponse, Error, TArgs> {
  return useMutation<TResponse, Error, TArgs>({
    mutationFn,
    ...options,
    onError: (error, variables, context) => {
      devLog('error', error.message, error)
      options?.onError?.(error, variables, context)
    },
    onSuccess: (data, variables, context) => {
      // TODO 성공했을때 공통적으로 수행할 함수 추가 (ex. toast, console.log 등)
      options?.onSuccess?.(data, variables, context)
    },
  })
}
