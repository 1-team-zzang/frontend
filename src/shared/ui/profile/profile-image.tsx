import { cva, type VariantProps } from 'class-variance-authority'
import { type HTMLAttributes } from 'react'

import { IconProfile } from '@/shared/assets'
import { cn } from '@/shared/utils'

import { useProfileContext } from './profile-context'

const ProfileImageVariants = cva('flex items-center justify-center border-gray-20 bg-white rounded-full', {
  variants: {
    size: {
      sm: 'size-10 border',
      lg: 'size-20 border-2 ',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
})

interface Props extends HTMLAttributes<HTMLImageElement>, VariantProps<typeof ProfileImageVariants> {}

export default function ProfileImage({ size = 'sm', className }: Props) {
  const { src } = useProfileContext()

  if (!src) {
    return (
      <div className={cn(ProfileImageVariants({ size }))}>
        <IconProfile width={size === 'sm' ? 32 : 64} />
      </div>
    )
  }

  return <img src={src} alt="프로필 이미지" className={cn(ProfileImageVariants({ size }), className)} />
}
