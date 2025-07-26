import Text from '@/shared/ui/text/text'

import type { FallbackProps } from 'react-error-boundary'
import type { NavigateFunction } from 'react-router'

interface Props extends FallbackProps {
  navigate: NavigateFunction
}

export default function ErrorFallback({ error, resetErrorBoundary, navigate }: Props) {
  const handleGoHome = () => {
    navigate('/')
  }

  return (
    <div className="mx-auto flex flex-col items-center gap-y-5 px-5 py-7">
      <Text typography="h2-heading">잠시 후 다시 시도해주세요.</Text>
      <Text typography="b2-normal" className="text-gray-60 text-center">
        {error.message || '현재 일시적인 오류가 발생했습니다. 잠시 후 다시 시도해 주시기 바랍니다.'}
      </Text>
      <div className="w-full flex flex-col gap-2">
        <button className="w-full h-12 bg-primary-50 rounded-[0.625rem]" onClick={resetErrorBoundary}>
          다시 시도
        </button>
        <button className="w-full h-12 bg-gray-80 text-white rounded-[0.625rem]" onClick={handleGoHome}>
          홈으로 이동
        </button>
      </div>
    </div>
  )
}
