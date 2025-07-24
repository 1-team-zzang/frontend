import axios from 'axios'

import type { Schedule } from '@/entities/schedule'

export async function getShearSchedule(): Promise<Schedule[]> {
  const res = await axios.get('/api/schedules?start=2025-05-01&end=2025-12-31', { withCredentials: true })
  return res.data.data
}
