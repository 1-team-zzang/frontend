import { Link } from 'react-router'

import { Text } from '@/shared/ui'
import { cn } from '@/shared/utils'

interface Props {
  type: 'signin' | 'signup'
  to: string
  className?: string
}

const prompts = {
  signin: '캘픽이 처음이신가요?',
  signup: '이미 회원이신가요?',
}

const texts = {
  signin: '회원가입',
  signup: '로그인',
}

export default function PromptSwitch({ type, to, className }: Props) {
  return (
    <div className={cn('flex items-center gap-1 text-center justify-center', className)}>
      <Text typography="b2-normal" className="text-gray-80">
        {prompts[type]}
      </Text>
      <Text
        as="span"
        typography="b2-heading"
        className="text-primary-80 underline decoration-solid decoration-2 decoration-skip-ink underline-offset-4"
      >
        <Link to={to}>{texts[type]}</Link>
      </Text>
    </div>
  )
}
