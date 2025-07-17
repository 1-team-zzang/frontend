import { useState } from 'react'

import defaultProfile from '@/shared/assets/icons/check-active.svg'
import { cn } from '@/shared/utils/cn.ts'

import { useProfileContext } from './profile-context'

const profileSize = {
  sm:'',
  lg:'',
}

interface Props {
size?: 'sm' | 'lg'
className?: string
}

export default function ProfileImage({ size = 'sm', className } : Props) {
  const { src } = useProfileContext()
  const [error, setError] = useState(false)
  const imageSrc = !src || error ? defaultProfile : src

  return (
    <img src={imageSrc} alt="프로필 이미지" onError={() => setError(true)} className={cn('rounded-full', profileSize[size], className)}/>
  )
}
