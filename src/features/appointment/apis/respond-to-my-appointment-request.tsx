import { AxiosError } from 'axios'

import axiosInstance from '@/shared/api/axios-instance'

import type { RespondToMyAppointmentRequestParams } from '../models'

export async function respondToMyAppointmentRequest({
  appointmentId,
  status,
  content,
}: RespondToMyAppointmentRequestParams) {
  try {
    const { data } = await axiosInstance.put('/appointments/requests', { id: appointmentId, status, content })
    return data
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 401) {
        throw new Error('로그인 시간이 만료되어 약속 요청에 응답할 수 없어요. 다시 로그인해 주세요.')
      }

      if (error.response?.status === 403) {
        throw new Error('이 약속 요청에 응답할 권한이 없어요. 필요 시 관리자에게 권한 요청을 해 주세요.')
      }

      if (error.response?.status === 404) {
        throw new Error('해당 약속 요청을 찾을 수 없어요. 이미 삭제되었거나 존재하지 않는 요청일 수 있어요.')
      }

      if (error.response?.status === 500) {
        throw new Error('요청하신 약속 응답을 처리하는 데 문제가 발생했어요. 잠시 후 다시 시도해 주세요.')
      }
    }

    throw error
  }
}
