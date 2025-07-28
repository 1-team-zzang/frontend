import { createBrowserRouter } from 'react-router'

import { MyDetailedSchedule, MyDetailedScheduleList } from '@/features/my-schedule'
import { ShareDetailedSchedule, ShareDetailedScheduleList } from '@/features/share-schedule'
import AppointmentDetailPage from '@/pages/appointment/appointment-detail-page'
import AppointmentListPage from '@/pages/appointment/appointment-list-page'
import Authlayout from '@/pages/auth/auth-layout'
import MySettingsPage from '@/pages/auth/settings/my-settings-page'
import SigninPage from '@/pages/auth/signin/signin-page'
import SignupPage from '@/pages/auth/signup/signup-page'
import DetailedScheduleLayout from '@/pages/detailed-schedule/detailed-schedule-layout'
import FriendDetailedSchedulePage from '@/pages/detailed-schedule/friend-detailed-schedule/friend-detailed-schedule'
import FriendDetailedScheduleListPage from '@/pages/detailed-schedule/friend-detailed-schedule/friend-detailed-schedule-list-page'
import FriendCalendarPage from '@/pages/friend-calendar/friend-calendar-page'
import FriendsPage from '@/pages/friends/friends-page'
import Home from '@/pages/home/home'
import MainLayout from '@/pages/main-layout'
import PrivateRoute from '@/pages/private-route'
import ShareCalendarPage from '@/pages/share-calendar/share-calendar-page'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        Component: PrivateRoute,
        children: [
          {
            path: 'my',
            children: [
              {
                path: 'detailed-schedule',
                Component: DetailedScheduleLayout,
                children: [
                  {
                    path: 'date/:date',
                    Component: MyDetailedScheduleList,
                  },
                  {
                    path: 'date/:date/schedule/:scheduleId',
                    Component: MyDetailedSchedule,
                  },
                ],
              },
              {
                path: 'settings',
                Component: MySettingsPage,
              },
            ],
          },
          {
            path: 'friends',
            children: [
              {
                index: true,
                Component: FriendsPage,
              },
              {
                path: ':friendId/calendar',
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
            ],
          },
          {
            path: 'appointments',
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
        ],
      },

      {
        path: 'share/:userId',
        Component: ShareCalendarPage,
        children: [
          {
            path: 'detailed-schedule',
            Component: DetailedScheduleLayout,
            children: [
              {
                path: 'date/:date',
                Component: ShareDetailedScheduleList,
              },
              {
                path: 'date/:date/schedule/:scheduleId',
                Component: ShareDetailedSchedule,
              },
            ],
          },
        ],
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
])
