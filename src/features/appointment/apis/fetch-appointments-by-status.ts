import { AxiosError } from 'axios'

import axiosInstance from '@/shared/api/axios-instance'

import type { MyAppointmentsByStatusParams } from '../models/appointment.types'
import type { AppointmentResponse } from '@/entities/appointment/models'

export async function fetchMyAppointmentsByStatus({
  page,
  size,
  status,
}: MyAppointmentsByStatusParams & { page: number }) {
  try {
    const { data } = await axiosInstance.get<AppointmentResponse>(
      `/appointments/requests?page=${page}&size=${size}&status=${status}`,
    )
    return data
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 401) {
        throw new Error('로그인 시간이 만료되어 약속 목록을 불러올 수 없어요. 다시 로그인해 주세요.')
      }

      if (error.response?.status === 403) {
        throw new Error('약속 목록을 볼 수 있는 권한이 없어요. 권한 요청이 필요하면 관리자에게 문의해 주세요.')
      }

      if (error.response?.status === 500) {
        throw new Error('서버에서 약속 목록을 가져오는데 실패했어요. 잠시 후 다시 시도해주세요.')
      }
    }

    throw error
  }
}
