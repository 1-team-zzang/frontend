import { createBrowserRouter } from 'react-router'

import AppointmentDetailPage from '@/pages/appointment/appointment-detail-page'
import AppointmentListPage from '@/pages/appointment/appointment-list-page'
import Authlayout from '@/pages/auth/auth-layout'
import SigninPage from '@/pages/auth/signin/signin-page'
import SignupPage from '@/pages/auth/signup/signup-page'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: () => <div>Hello World</div>,
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
      {
        path: 'requests/:id',
        Component: AppointmentDetailPage,
      },
    ],
  },
])
