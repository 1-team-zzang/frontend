import { useState } from 'react'
import { Outlet } from 'react-router'

import { useUserStore } from '@/entities/user/models/use-user-store'
import EmailSigninModal from '@/features/auth/signin/ui/email-signin-modal'
import SignupModal from '@/features/auth/signup/ui/signup-modal'
import { MyCalendar } from '@/features/my-schedule/ui'
import { IconCalendarArrowLeft } from '@/shared/assets/icons'
import useIntroGuide from '@/shared/hooks/use-intro-guide'
import { Calendar, HeaderButton, HeaderContainer, HeaderMonthLabel, InfiniteCalendar } from '@/shared/ui'

import type { AuthModalType } from '@/features/auth/signin/model/auth-modal.type'

export default function Home() {
  const user = useUserStore((state) => state.user)

  const [isOpen, setIsOpen] = useState(!user) // 로그인 안 되어 있으면 기본값 true
  const [switchModal, setSwitchModal] = useState<AuthModalType>('EmailLogin')
  const onDateClick = () => {
    if (!user) {
      setSwitchModal('EmailLogin')
      setIsOpen(true)
      return
    }
  }

  useIntroGuide()
  return (
    <>
      <Outlet />
      {!user ? (
        <Calendar onDateClick={onDateClick}>
          <HeaderContainer>
            <HeaderButton>
              <IconCalendarArrowLeft />
            </HeaderButton>
            <HeaderMonthLabel />
            <HeaderButton>오늘</HeaderButton>
          </HeaderContainer>
          <InfiniteCalendar />
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
        </Calendar>
      ) : (
        <MyCalendar />
      )}
    </>
  )
}
