import { Link } from 'react-router'

import SignupForm from '@/features/auth/signup/ui/signup-form'
import Text from '@/shared/ui/text/text'
export default function SignupPage() {
  return (
    <div className="flex flex-col">
      <Text as="h1" typography="h1-heading" className="text-center">
        회원가입
      </Text>
      <SignupForm />

      <Link
        to="/auth/signin"
        className="text-center mt-4 underline text-primary-80 decoration-solid decoration-2 decoration-skip-ink underline-offset-4"
      >
        이메일로그인
      </Link>
    </div>
  )
}
