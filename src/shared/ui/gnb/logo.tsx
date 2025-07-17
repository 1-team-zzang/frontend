import { IconLogo } from '@/shared/assets/icons'
import { Link } from 'react-router'

export default function Logo() {
  return (
    <Link to={'/'}>
      <IconLogo className="w-16" />
    </Link>
  )
}
