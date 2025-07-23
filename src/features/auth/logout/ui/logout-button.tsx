import Button from '@/shared/ui/button/button.tsx'

import useLogoutMutation from '../model/use-logout-mutation'

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
