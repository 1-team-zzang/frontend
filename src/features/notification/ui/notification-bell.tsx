import { useRef, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { IconNotification, IconNotificationAlert } from '@/shared/assets'
import { useClickOutside } from '@/shared/hooks'

import FallbackNotificationList from './fallback-notification-list'
import { NotificationProvider } from './notification-context'
import NotificationList from './notification-list'

export default function NotificationBell() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  // TODO: 알림 읽음 처리 후 수정 / 현재는 임시값
  const hasUnreadNotifications = false

  const handleClick = () => {
    setIsOpen((prev) => !prev)
  }

  const ref = useRef<HTMLDivElement>(null)
  useClickOutside(ref, () => setIsOpen(false))

  return (
    <NotificationProvider value={{ isOpen, onOpenChange: setIsOpen, onToggleChange: () => setIsOpen((prev) => !prev) }}>
      <div className="relative" ref={ref}>
        <button className="flex items-center" onClick={handleClick}>
          {hasUnreadNotifications ? <IconNotificationAlert /> : <IconNotification />}
        </button>
        {isOpen && (
          <ErrorBoundary
            fallbackRender={({ resetErrorBoundary }) => <FallbackNotificationList reset={resetErrorBoundary} />}
          >
            <NotificationList />
          </ErrorBoundary>
        )}
      </div>
    </NotificationProvider>
  )
}
