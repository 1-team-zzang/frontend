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

  return (
    <img src={src} alt="프로필 이미지" className={cn('rounded-full', profileSize[size], className)}/>
  )
}
