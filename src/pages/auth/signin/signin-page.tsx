import { SigninForm } from '@/features/auth/signin/ui'
import { PromptSwitch } from '@/features/auth/ui'
import { Header, PageBackButton } from '@/shared/ui'

export default function SigninPage() {
  return (
    <>
      <Header onNavigate={<PageBackButton />} onClick={<div />}>
        로그인
      </Header>
      <div className="flex flex-col mx-4 mt-12">
        <SigninForm isPage />
        <PromptSwitch type="signin" to="/auth/signup" className="mt-6" />
      </div>
    </>
  )
}
