export type MyAppointmentStatus = 'REQUESTED' | 'NOTREQUESTED'

export interface MyAppointmentsByStatusParams {
  page: number
  size: number
  status: MyAppointmentStatus
}
