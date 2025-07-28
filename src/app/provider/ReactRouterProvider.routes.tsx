import { createBrowserRouter } from 'react-router'

import AppointmentDetailPage from '@/pages/appointment/appointment-detail-page'
import AppointmentListPage from '@/pages/appointment/appointment-list-page'
import Authlayout from '@/pages/auth/auth-layout'
import SigninPage from '@/pages/auth/signin/signin-page'
import SignupPage from '@/pages/auth/signup/signup-page'
import DetailedScheduleLayout from '@/pages/detailed-schedule/detailed-schedule-layout'
import FriendDetailedSchedulePage from '@/pages/detailed-schedule/friend-detailed-schedule/friend-detailed-schedule'
import FriendDetailedScheduleListPage from '@/pages/detailed-schedule/friend-detailed-schedule/friend-detailed-schedule-list-page'
import MyDetailedScheduleListPage from '@/pages/detailed-schedule/my-detailed-schedule/my-detailed-schedule-list-page'
import MyDetailedSchedulePage from '@/pages/detailed-schedule/my-detailed-schedule/my-detailed-schedule-page'
import ShareDetailedScheduleListPage from '@/pages/detailed-schedule/share-detailed-schedule/share-detailed-schedule-list-page'
import ShareDetailedSchedulePage from '@/pages/detailed-schedule/share-detailed-schedule/share-detailed-schedule-page'
import FriendCalendarPage from '@/pages/friend-calendar/friend-calendar-page'
import FriendsPage from '@/pages/friends/friends-page'
import Home from '@/pages/home/home'
import MainLayout from '@/pages/main-layout'
import ShareCalendarPage from '@/pages/share-calendar/share-calendar-page'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: () => <div>메인 페이지</div>,
      },
      {
        path: 'my',
        Component: Home,
        children: [
          {
            path: 'detailed-schedule',
            Component: DetailedScheduleLayout,
            children: [
              {
                path: 'date/:date',
                Component: MyDetailedScheduleListPage,
              },
              {
                path: 'date/:date/schedule/:scheduleId',
                Component: MyDetailedSchedulePage,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: 'friends/:friendId/calendar',
    Component: FriendCalendarPage,
    children: [
      {
        path: 'detailed-schedule',
        Component: DetailedScheduleLayout,
        children: [
          { path: 'date/:date', Component: FriendDetailedScheduleListPage },
          { path: 'date/:date/schedule/:scheduleId', Component: FriendDetailedSchedulePage },
        ],
      },
    ],
  },
  {
    path: '/share/:userId',
    Component: ShareCalendarPage,
    children: [
      {
        path: 'detailed-schedule',
        Component: DetailedScheduleLayout,
        children: [
          {
            path: 'date/:date',
            Component: ShareDetailedScheduleListPage,
          },
          {
            path: 'date/:date/schedule/:scheduleId',
            Component: ShareDetailedSchedulePage,
          },
        ],
      },
    ],
  },
  {
    path: 'friends',
    Component: FriendsPage,
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
