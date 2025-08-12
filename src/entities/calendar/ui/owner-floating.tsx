import { useSearchParams } from 'react-router'

export default function OwnerFloating() {
  const [searchParams] = useSearchParams()
  const name = searchParams.get('userName')?.trim()

  if (!name) {
    return null
  }

  return (
    <div className="bg-primary-40 flex items-center justify-center shadow-xl absolute top-[140px] left-1/2 -translate-x-1/2 rounded-full z-sticky">
      <div className="size-4" />
      <div className="block truncate">{`${name}님의 캘린더`}</div>
      <div className="size-4" />
    </div>
  )
}
