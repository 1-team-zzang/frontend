import { Link } from 'react-router'

import { IconLogo } from '@/shared/assets/icons'

export default function Logo() {
  return (
    <Link to="/">
      <IconLogo className="w-16" />
    </Link>
  )
}
