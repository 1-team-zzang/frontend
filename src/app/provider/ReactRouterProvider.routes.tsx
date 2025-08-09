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
  PrivateRoute,
  RegisterSchedulePage,
  RegisterDetailedSchedulePage,
  ShareCalendarPage,
  ShareDetailedScheduleListPage,
  ShareDetailedSchedulePage,
  SigninPage,
  SignupPage,
  AppointmentSchedulePage,
  EditMySchedulePage,
  SettingsPage,
  ProfileEditPage,
  PasswordChangePage,
  WithdrawPage,
  KaKaoRedirectPage,
  PasswordChangeRoute,
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
        path: 'test',
        Component: AppointmentSchedulePage,
      },
      {
        Component: PrivateRoute,
        children: [
          {
            path: 'settings',
            children: [
              {
                index: true,
                Component: SettingsPage,
              },
              {
                path: 'profile-edit',
                Component: ProfileEditPage,
              },
              {
                Component: PasswordChangeRoute,
                children: [
                  {
                    path: 'password-change',
                    Component: PasswordChangePage,
                  },
                ],
              },
              {
                path: 'withdraw',
                Component: WithdrawPage,
              },
            ],
          },
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

              { path: 'schedule/create', Component: RegisterSchedulePage },
              {
                path: 'detailed-schedule/create',
                Component: RegisterDetailedSchedulePage,
              },
              { path: 'edit/schedules/:scheduleId', Component: EditMySchedulePage },
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
                path: ':friendId/calendar/appointment/create',
                Component: AppointmentSchedulePage,
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
        path: 'share/:userId/appointment/create',
        Component: AppointmentSchedulePage,
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
  {
    path: '/oauth/kakao',
    Component: KaKaoRedirectPage,
  },
])
