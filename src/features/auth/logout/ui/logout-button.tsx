import { Button } from '@/shared/ui'

import { useLogoutMutation } from '../model'

export default function LogoutButton() {
  const logoutMutation = useLogoutMutation()

  const handleClick = () => {
    logoutMutation.mutate()
  }
  return (
    <Button type="button" onClick={handleClick} intent="solid">
      로그아웃
    </Button>
  )
}
