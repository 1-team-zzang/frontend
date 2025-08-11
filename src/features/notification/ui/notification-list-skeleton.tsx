import { Text } from '@/shared/ui'
import { cn } from '@/shared/utils'

function NotificationListItemSkeleton() {
  return (
    <li className="flex flex-col p-2 rounded-xl">
      <div className="flex items-center gap-2 animate-pulse">
        {/* 태그 영역 */}
        <div className="h-4 w-10 rounded-xl bg-gray-5" />

        {/* 알림 내용 */}
        <div className="h-4 flex-1 rounded bg-gray-5" />
      </div>

      {/* 날짜 영역 */}
      <div className="mt-1 h-4 w-20 rounded bg-gray-5 animate-pulse" />
    </li>
  )
}

// eslint-disable-next-line react/no-multi-comp
export default function NotificationListSkeleton() {
  const count = 6
  return (
    <div
      className={cn(
        'absolute z-dropdown top-4 -right-20 m-4 h-68 rounded-2xl w-fit sm:w-96 bg-white shadow-2xl p-4 whitespace-nowrap scrollbar-hide',
      )}
    >
      <Text as="h2" typography="b1-heading" className="mb-4">
        캘픽 알림
      </Text>
      <ul className="overflow-y-auto h-48 flex flex-col gap-1">
        {Array.from({ length: count }).map((_, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <NotificationListItemSkeleton key={idx} />
        ))}
      </ul>
    </div>
  )
}
