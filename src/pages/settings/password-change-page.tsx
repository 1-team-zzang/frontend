import { PasswordChangeForm } from '@/features/profile/password-change/ui'
import { Header, PageBackButton } from '@/shared/ui'

function PasswordChangePage() {
  return (
    <>
      <Header onNavigate={<PageBackButton />} onClick={<div />}>
        비밀번호 변경
      </Header>
      <main className="py-8 px-4">
        <PasswordChangeForm />
      </main>
    </>
  )
}

export default PasswordChangePage
