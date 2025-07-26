import { useState } from 'react'

import { cn } from '@/shared/utils/cn.ts'

import { useProfileContext } from './profile-context'

const profileSize = {
  sm: '',
  lg: '',
}

interface Props {
  size?: 'sm' | 'lg'
  className?: string
}

export default function ProfileImage({ size = 'sm', className }: Props) {
  const { src } = useProfileContext()
  const [error, setError] = useState(false)

  if (!src || error) {
    return <div className="size-10 rounded-full bg-gray-5" />
  }

  return (
    <img
      src={src}
      alt="프로필 이미지"
      onError={() => setError(true)}
      className={cn('rounded-full size-10', profileSize[size], className)}
    />
  )
}
