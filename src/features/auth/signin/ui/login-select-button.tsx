import { useState } from 'react'

import Text from '@/shared/ui/text/text'
import { cn } from '@/shared/utils'

import SignupModal from '../../signup/ui/signup-modal'

import EmailSigninModal from './email-signin-modal'
import LoginSelectModal from './login-select-modal'

import type { AuthModalType } from '../model/auth-modal.type'

export default function LoginSelectButton({ className }: { className?: string }) {
  const [modalType, setModalType] = useState<AuthModalType>(null)

  const handleModalChange = (open: boolean) => {
    if (!open) {
      setModalType(null)
    }
  }
  return (
    <>
      <Text
        as="button"
        typography="label"
        className={cn('text-gray-80', className)}
        onClick={() => setModalType('LoginSelect')}
      >
        로그인
      </Text>
      {modalType === 'LoginSelect' && (
        <LoginSelectModal
          isOpen={modalType === 'LoginSelect'}
          setSwitchModal={setModalType}
          setClose={handleModalChange}
        />
      )}
      {modalType === 'EmailLogin' && (
        <EmailSigninModal
          isOpen={modalType === 'EmailLogin'}
          setSwitchModal={setModalType}
          setClose={handleModalChange}
        />
      )}
      {modalType === 'Signup' && (
        <SignupModal isSignupOpen={modalType === 'Signup'} setSwitchModal={setModalType} setClose={handleModalChange} />
      )}
    </>
  )
}
