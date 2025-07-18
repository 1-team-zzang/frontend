import { useProfileContext } from './profile-context'

interface Props {
    className?: string
}

export default function ProfileName({ className } : Props) {
  const { name } = useProfileContext()

  return <span className={className}>{name}</span>
}
