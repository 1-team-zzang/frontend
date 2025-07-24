import axios from 'axios'

import type { Schedule } from '@/entities/schedule'

export async function getFriendSchedule(): Promise<Schedule[]> {
  const res = await axios.get('/api/schedules?start=2025-05-01&end=2025-12-31', {})
  return res.data.data
}

// export async function getFriendSchedule(friendID: string): Promise<Schedule[]> {
//   const res = await axios.get(`/api/schedules/user/${friendID}?start=2025-05-01&end=2025-12-31`, {})
//   return res.data.data
// }
// 진짜 api 요청 param에서 friendID 받아옴
