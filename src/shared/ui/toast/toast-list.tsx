import { AnimatePresence } from 'framer-motion'

import ToastContent from './toast-content'
import ToastPortal from './toast-portal'
import { useToastStore } from './use-toast-store'

/**
 *
 * import { toast } from '@/shared/ui/toast'
 *  const handleClick = () => {
 *   toast.success('링크가 복사되었습니다!')
 *   toast.error('에러가 발생했어요')
 * }
 */

export default function ToastList() {
  const { toasts } = useToastStore()

  return (
    <ToastPortal>
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-toast space-y-1 opacity-80">
        <AnimatePresence>
          {toasts.map((toast) => (
            <ToastContent key={toast.id} type={toast.type}>
              {toast.message}
            </ToastContent>
          ))}
        </AnimatePresence>
      </div>
    </ToastPortal>
  )
}
