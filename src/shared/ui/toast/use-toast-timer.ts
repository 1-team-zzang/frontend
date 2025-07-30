import { useEffect, useRef } from 'react'

import { useToastStore } from './use-toast-store'

export default function useToastTimer() {
  const { toasts, removeToast } = useToastStore()
  const timersRef = useRef<Map<string, ReturnType<typeof setTimeout>>>(new Map())

  useEffect(() => {
    // 새로 추가된 토스트에 대해서만 타이머 설정
    toasts.forEach((toast) => {
      if (!timersRef.current.has(toast.id)) {
        const timer = setTimeout(() => {
          removeToast(toast.id)
          timersRef.current.delete(toast.id)
        }, 2000)

        timersRef.current.set(toast.id, timer)
      }
    })

    // 사라진 토스트의 타이머 정리
    const currentToastIds = new Set(toasts.map((t) => t.id))
    timersRef.current.forEach((timer, id) => {
      if (!currentToastIds.has(id)) {
        clearTimeout(timer)
        timersRef.current.delete(id)
      }
    })

    // 언마운트 시 모든 타이머 정리
    return () => {
      timersRef.current.forEach(clearTimeout)
      timersRef.current.clear()
    }
  }, [toasts, removeToast])
}
