import { forwardRef, Suspense, type ComponentPropsWithoutRef } from 'react'

import { useIntersect } from '@/shared/hooks'
import { Text } from '@/shared/ui'
import { cn } from '@/shared/utils'

import { useNotification } from '../model'

import NotificationListItem from './notification-list-item'
import NotificationListSkeleton from './notification-list-skeleton'

// TODO 디자인 시안 나오면 디자인 수정
const NotificationList = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>(
  ({ className, ...restProps }, ref) => {
    const { data, hasNextPage, fetchNextPage } = useNotification()

    const observerRef = useIntersect<HTMLDivElement>({
      onIntersect: (entry, _observer) => {
        if (entry.isIntersecting) {
          if (hasNextPage) {
            fetchNextPage()
          }
        }
      },
    })

    const notifications = data?.notifications ?? []

    return (
      <div
        ref={ref}
        className={cn(
          'absolute z-dropdown top-4 -right-20 m-4 h-68 rounded-2xl w-fit sm:w-96 bg-white shadow-2xl p-4 whitespace-nowrap',
          className,
        )}
        {...restProps}
      >
        <Text as="h2" typography="b1-heading" className="mb-4">
          캘픽 알림
        </Text>

        <Suspense fallback={<NotificationListSkeleton />}>
          <ul className="overflow-y-auto h-48 scrollbar-hide flex flex-col">
            {notifications.map((notification, idx) => (
              // eslint-disable-next-line react/no-array-index-key
              <NotificationListItem notification={notification} key={idx} />
              // key값에 Idx값을 사용하면 안되는건 아는데 현재 백엔드에서 넘겨주는 데이터에 key값으로 사용할 고유한 데이터나 id가 없어서 임시로 Idx사용했습니다
            ))}
            <div className="h-[1px]" ref={observerRef} />
          </ul>
        </Suspense>
      </div>
    )
  },
)

NotificationList.displayName = 'NotificationList'
export default NotificationList
