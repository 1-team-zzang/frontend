// components/Toast/ToastList.tsx
import { useEffect } from 'react'

import ToastContent from './toast-content'
import { useToastStore } from './use-toast-store'

export default function Toast() {
  const { toasts, removeToast } = useToastStore()

  useEffect(() => {
    const timers = toasts.map((toast) =>
      setTimeout(() => {
        removeToast(toast.id)
      }, 2000),
    )
    return () => {
      timers.forEach(clearTimeout)
    }
  }, [toasts, removeToast])

  return (
    <div className="fixed bottom-4 translate-x-1/2 z-toast space-y-1">
      {toasts.map((toast) => (
        <ToastContent key={toast.id}>{toast.message}</ToastContent>
      ))}
    </div>
  )
}
