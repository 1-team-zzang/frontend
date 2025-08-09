import { useState, type ReactNode } from 'react'

import { useUserStore } from '@/entities/user'
import { EmailSigninModal, LoginSelectModal } from '@/features/auth/signin/ui'

import type { AuthModalType } from '@/features/auth'

/**
 *
 * @description
 * 로그인 여부를 판단하여 접근을 제어하는 컴포넌트.
 * - 로그인 상태가 아니면 인증 관련 모달(LoginSelectModal / EmailSigninModal)을 표시하고
 *   로그인 상태이면 children 요소를 그대로 렌더링한다.
 *
 * @example
 *
 * export default function HomePage() {
 *   return (
 *     <AuthGate>
 *       <Calender />
 *     </AuthGate>
 *   )
 * }
 * ```
 *
 * @returns 로그인 여부에 따라 인증 모달 또는 children을 반환.
 */

interface Props {
  children: ReactNode
}

export default function AuthGate({ children }: Props) {
  const user = useUserStore((s) => s.user)
  const [isOpen, setIsOpen] = useState(!user)
  const [switchModal, setSwitchModal] = useState<AuthModalType>('LoginSelect')

  if (!user) {
    return (
      <>
        {switchModal === 'LoginSelect' && (
          <LoginSelectModal isOpen={isOpen} setClose={setIsOpen} setSwitchModal={setSwitchModal} />
        )}
        {switchModal === 'EmailLogin' && (
          <EmailSigninModal isOpen={isOpen} setClose={setIsOpen} setSwitchModal={setSwitchModal} />
        )}
      </>
    )
  }

  return <div>{children}</div>
}
