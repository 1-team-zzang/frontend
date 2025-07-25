import { createBrowserRouter } from 'react-router'

import Authlayout from '@/pages/auth/auth-layout'
import SigninPage from '@/pages/auth/signin/signin-page'
import SignupPage from '@/pages/auth/signup/signup-page'
import DetailedScheduleLayout from '@/pages/home/my-detailed-schedule/my-detailed-schedule-layout'
import MyDetailedScheduleListPage from '@/pages/home/my-detailed-schedule/my-detailed-schedule-list-page'
import MyDetailedSchedulePage from '@/pages/home/my-detailed-schedule/my-detailed-schedule-page'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: () => <div>Hello world</div>,
  },
  {
    path: '/my-calendar',
    Component: DetailedScheduleLayout,
    children: [
      { path: 'date/:date', Component: MyDetailedScheduleListPage },
      { path: 'date/:date/schedule/:scheduleId', Component: MyDetailedSchedulePage },
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
])
