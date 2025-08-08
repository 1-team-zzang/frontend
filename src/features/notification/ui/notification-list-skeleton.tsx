import { cn } from '@/shared/utils'

function NotificationListItemSkeleton() {
  return (
    <li className="flex flex-col p-2 rounded-xl animate-pulse">
      <div className="flex items-center gap-2">
        {/* 카테고리 태그 */}
        <div className={cn('py-0.5 px-4 w-14 h-5 rounded-xl bg-gray-color-10')} />
        {/* 내용 */}
        <div className="h-4 bg-gray-color-10 rounded w-2/3" />
      </div>

      {/* 날짜 */}
      <div className="h-3 bg-gray-color-10 rounded w-20 mt-2" />
    </li>
  )
}

// eslint-disable-next-line react/no-multi-comp
export default function NotificationListSkeleton({ count = 5 }: { count?: number }) {
  return (
    <ul className="overflow-y-auto h-48 flex flex-col gap-1">
      {Array.from({ length: count }).map((_, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <NotificationListItemSkeleton key={idx} />
      ))}
    </ul>
  )
}
