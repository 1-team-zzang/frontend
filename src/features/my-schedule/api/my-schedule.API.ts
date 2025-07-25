import axios from 'axios'

import { devLog } from '@/shared/utils/dev-log'

import type { Schedule } from '@/entities/schedule'

// export async function getMySchedule(): Promise<Schedule[]> {
//   try {
//     const res = await axiosInstance.get('/schedules', {
//       params: {
//         start: '2025-05-01',
//         end: '2025-12-31',
//       },
//     })
//     devLog('log', '내 캘린더', res.data?.data?.scheduleResponseList)
//     return res.data?.data?.scheduleResponseList ?? []
//   } catch (error) {
//     devLog('log', '❌ 요청 실패', error)
//     throw error
//      return []
//   }
// }

export async function getMySchedule(): Promise<Schedule[]> {
  try {
    const res = await axios.get('/api/schedules', {
      params: {
        start: '2025-05-01',
        end: '2025-12-31',
      },
    })
    devLog('log', '내 캘린더', res.data?.data)
    return res.data?.data
  } catch (error) {
    devLog('log', '❌ 요청 실패', error)
    throw error
  }
}
