import { useRef, useState } from 'react'

import { IconNotification, IconNotificationAlert } from '@/shared/assets'
import { useClickOutside } from '@/shared/hooks'

import NotificationList from './notification-list'

export default function NotificationBell() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  // TODO: 알림 읽음 처리 후 수정 / 현재는 임시값
  const hasUnreadNotifications = true

  const handleClick = () => {
    setIsOpen((prev) => !prev)
  }

  const ref = useRef<HTMLDivElement>(null)
  useClickOutside(ref, () => setIsOpen(false))

  return (
    <div className="relative" ref={ref}>
      <button className="flex items-center" onClick={handleClick}>
        {hasUnreadNotifications ? <IconNotificationAlert /> : <IconNotification />}
      </button>
      {isOpen && <NotificationList />}
    </div>
  )
}
