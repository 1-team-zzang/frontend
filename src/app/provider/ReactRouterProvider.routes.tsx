import { createBrowserRouter } from 'react-router'

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
  MyDetailedScheduleListPage,
  MyDetailedSchedulePage,
  MySettingsPage,
  PrivateRoute,
  ShareCalendarPage,
  ShareDetailedScheduleListPage,
  ShareDetailedSchedulePage,
  SigninPage,
  SignupPage,
} from '@/pages'
import ScheduleRegisterPage from '@/pages/schedule-register/schedule-register'

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
                    Component: MyDetailedScheduleListPage,
                  },
                  {
                    path: 'date/:date/schedules/:scheduleId',
                    Component: MyDetailedSchedulePage,
                  },
                ],
              },
              {
                path: 'settings',
                Component: MySettingsPage,
              },
              { path: 'schedule/create', Component: ScheduleRegisterPage },
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
              },
              {
                path: ':friendId/calendar/detailed-schedule',
                Component: DetailedScheduleLayout,
                children: [
                  { path: 'date/:date', Component: FriendDetailedScheduleListPage },
                  { path: 'date/:date/schedules/:scheduleId', Component: FriendDetailedSchedulePage },
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
      },
      {
        path: 'share/:userId/detailed-schedule',
        Component: DetailedScheduleLayout,
        children: [
          {
            path: 'date/:date',
            Component: ShareDetailedScheduleListPage,
          },
          {
            path: 'date/:date/schedules/:scheduleId',
            Component: ShareDetailedSchedulePage,
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
