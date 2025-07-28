import { createBrowserRouter } from 'react-router'

import { MyDetailedSchedule, MyDetailedScheduleList } from '@/features/my-schedule'
import { ShareDetailedSchedule, ShareDetailedScheduleList } from '@/features/share-schedule'
import {
  AppointmentDetailPage,
  AppointmentListPage,
  AuthLayout,
  DetailedScheduleLayout,
  FriendCalendarPage,
  FriendDetailedScheduleListPage,
  FriendDetailedSchedulePage,
  FriendsPage,
  Home,
  MainLayout,
  MySettingsPage,
  PrivateRoute,
  ShareCalendarPage,
  SigninPage,
  SignupPage,
} from '@/pages'

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
    Component: AuthLayout,
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
