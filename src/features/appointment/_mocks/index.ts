import { getAppointmentDetailHandler } from './get-appointment-detail-handler'
import { getAppointmentRequestsHandler } from './get-appointment-request-handler'
import { requestAppointmentHandler } from './request-appointment-handler'
import { updateAppointmentStatusHandler } from './update-appointment-status-handler'

export const appointmentMocks = [
  getAppointmentRequestsHandler,
  requestAppointmentHandler,
  updateAppointmentStatusHandler,
  getAppointmentDetailHandler,
]
