import { Text } from '@/shared/ui'

function FallbackNotificationList({ reset }: { reset: () => void }) {
  return (
    <div className="absolute z-dropdown top-4 -right-20 m-4 h-68 rounded-2xl w-fit sm:w-96 bg-white shadow-2xl p-4 whitespace-nowrap">
      <Text as="h2" typography="b1-heading" className="mb-4">
        캘픽 알림
      </Text>
      <div className="flex flex-col items-center h-48 justify-center">
        <Text as="span" typography="label">
          알림 리스트를 불러오지 못했습니다
        </Text>
        <Text as="button" onClick={reset} typography="label" className="hover:underline hover:underline-offset-4">
          다시시도
        </Text>
      </div>
    </div>
  )
}

export default FallbackNotificationList
