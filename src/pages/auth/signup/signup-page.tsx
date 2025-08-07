import SignupForm from '@/features/auth/signup/ui/signup-form'
import { PromptSwitch } from '@/features/auth/ui'
import { Header, PageBackButton } from '@/shared/ui'
export default function SignupPage() {
  return (
    <>
      <Header onNavigate={<PageBackButton />} onClick={<div />}>
        회원가입
      </Header>
      <div className="flex flex-col mx-4 mt-12">
        <SignupForm />

        <PromptSwitch type="signup" to="/auth/signin" className="mt-6" />
      </div>
    </>
  )
}
