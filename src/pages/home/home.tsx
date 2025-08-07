import { useState } from 'react'
import { Outlet } from 'react-router'

import { useUserStore } from '@/entities/user'
import { EmailSigninModal, LoginSelectModal } from '@/features/auth/signin/ui'
import { SignupModal } from '@/features/auth/signup/ui'
import { MyCalendar } from '@/features/my-schedule/ui'
import { IconCalendarArrowLeft } from '@/shared/assets'
import { useIntroGuide } from '@/shared/hooks'
import { Calendar, HeaderButton, HeaderContainer, HeaderMonthLabel, InfiniteCalendar } from '@/shared/ui'

import type { AuthModalType } from '@/features/auth/types'

export default function Home() {
  const user = useUserStore((state) => state.user)

  const [isOpen, setIsOpen] = useState(!user) // 로그인 안 되어 있으면 기본값 true
  const [switchModal, setSwitchModal] = useState<AuthModalType>('LoginSelect')
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

          {switchModal === 'LoginSelect' && (
            <LoginSelectModal
              isOpen={isOpen}
              setClose={setIsOpen}
              setSwitchModal={(mode) => {
                setSwitchModal(mode)
                if (mode === 'Signup') {
                  setIsOpen(true)
                }
              }}
            />
          )}

          {switchModal === 'Signup' && (
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

          {switchModal === 'EmailLogin' && (
            <EmailSigninModal
              isOpen={isOpen}
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
