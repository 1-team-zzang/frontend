import { createBrowserRouter } from 'react-router'

import AppointmentListPage from '@/pages/appointment/appointment-list-page'
import Authlayout from '@/pages/auth/auth-layout'
import SigninPage from '@/pages/auth/signin/signin-page'
import SignupPage from '@/pages/auth/signup/signup-page'
import MainLayout from '@/pages/main-layout'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        // TODO 메인 페이지 컴포넌트로 변경하기
        Component: () => <div>main</div>,
      },
    ],
  },
  {
    path: '/auth',
    Component: Authlayout,
    children: [
      {
        path: 'signin',
        Component: SigninPage,
      },
      {
        path: 'signup',
        Component: SignupPage,
      },
    ],
  },
  {
    path: '/appointment',
    children: [
      {
        index: true,
        Component: AppointmentListPage,
      },
    ],
  },
])
