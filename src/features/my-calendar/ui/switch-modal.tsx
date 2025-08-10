import { type Dispatch, type SetStateAction } from 'react'

import { EmailSigninModal, LoginSelectModal } from '@/features/auth/signin/ui'

import type { AuthModalType } from '@/features/auth'

/**
 *
 * @description
 * switchModal 값에 따라 LoginSelectModal 또는 EmailSigninModal을 표시한다.
 */

interface Props {
  switchModal: AuthModalType
  setSwitchModal: Dispatch<SetStateAction<AuthModalType>>
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function SwitchModal({ switchModal, setSwitchModal, isOpen, setIsOpen }: Props) {
  return (
    <div>
      {switchModal === 'LoginSelect' && (
        <LoginSelectModal isOpen={isOpen} setClose={setIsOpen} setSwitchModal={setSwitchModal} />
      )}
      {switchModal === 'EmailLogin' && (
        <EmailSigninModal isOpen={isOpen} setClose={setIsOpen} setSwitchModal={setSwitchModal} />
      )}
    </div>
  )
}
