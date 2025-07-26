import Text from '../text/text'

import { useProfileContext } from './profile-context'

interface Props {
  className?: string
}

export default function Profilename({ className }: Props) {
  const { name } = useProfileContext()

  return (
    <Text as="span" typography="b2-heading" className={className}>
      {name}
    </Text>
  )
}
