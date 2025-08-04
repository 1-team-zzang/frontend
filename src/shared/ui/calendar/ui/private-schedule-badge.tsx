import { IconLock } from '@/shared/assets/icons'

export default function PrivateScheduleBadge() {
  return (
    <div className="flex items-center gap-1 w-full bg-gray-20 rounded-sm z-base">
      <IconLock className="text-gray-0 size-3" />
    </div>
  )
}
