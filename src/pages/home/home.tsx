import { useState } from 'react'

import { useUserStore } from '@/entities/user/models/use-user-store'
import EmailSigninModal from '@/features/auth/signin/ui/email-signin-modal'
import SignupModal from '@/features/auth/signup/ui/signup-modal'
import MySchedule from '@/features/my-schedule/ui/my-schedule'
import CalendarUI from '@/widget/ui/calendar-ui'

import type { AuthModalType } from '@/features/auth/signin/model/auth-modal.type'

export default function Home() {
  const user = useUserStore((state) => state.user)

  const [isOpen, setIsOpen] = useState(!user) // 로그인 안 되어 있으면 기본값 true
  const [switchModal, setSwitchModal] = useState<AuthModalType>('EmailLogin')
  const handleDateClick = () => {
    if (!user) {
      setSwitchModal('EmailLogin')
      setIsOpen(true)
      return
    }
  }
  return (
    <>
      {''}
      {!user ? (
        <CalendarUI onDateClick={handleDateClick}>
          {switchModal === 'EmailLogin' ? (
            <EmailSigninModal
              isOpen={isOpen}
              setClose={setIsOpen}
              setSwitchModal={(mode) => {
                setSwitchModal(mode)
                if (mode === 'Signup') {
                  setIsOpen(true)
                }
              }}
            />
          ) : (
            <SignupModal
              isSignupOpen={isOpen}
              setClose={setIsOpen}
              setSwitchModal={(mode) => {
                setSwitchModal(mode)
                if (mode === 'EmailLogin') {
                  setIsOpen(true)
                }
              }}
            />
          )}
        </CalendarUI>
      ) : (
        <MySchedule />
      )}
    </>
  )
}
