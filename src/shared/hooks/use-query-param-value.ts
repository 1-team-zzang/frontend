import { useSearchParams } from 'react-router'

export default function useQueryParamValue<T>(name: string, defaultValue: string, options?: { uppercase?: boolean }) {
  const [searchParams] = useSearchParams(name)
  const value = searchParams.get(name) || defaultValue

  if (!value) {
    console.error(`${name} 값이 존재하지 않습니다.`)
    return defaultValue as T
  }

  if (options?.uppercase) {
    return value.toUpperCase() as T
  }

  return value as T
}
