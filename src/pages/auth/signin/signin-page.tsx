import { Link } from 'react-router'

import SigninForm from '@/features/auth/signin/ui/signin-form'
import Text from '@/shared/ui/text/text'

export default function SigninPage() {
  return (
    <div className="flex flex-col">
      <Text as="h1" typography="h1-heading" className="text-center">
        이메일 로그인
      </Text>
      <SigninForm />
      <Link
        to="/auth/signup"
        className="text-center mt-4 underline text-primary-80 decoration-solid decoration-2 decoration-skip-ink underline-offset-4"
      >
        회원가입
      </Link>
    </div>
  )
}
