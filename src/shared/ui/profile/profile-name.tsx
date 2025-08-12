import { cn } from '@/shared/utils'

import Text from '../text/text'

import { useProfileContext } from './profile-context'

interface Props {
  className?: string
}

export default function Profilename({ className }: Props) {
  const { name } = useProfileContext()

  return (
    <Text as="span" typography="b2-heading" className={cn('truncate', className)}>
      {name}
    </Text>
  )
}
