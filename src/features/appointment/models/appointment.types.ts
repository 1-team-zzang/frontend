export type MyAppointmentStatus = 'REQUESTED' | 'NOTREQUESTED'

export interface MyAppointmentsByStatusParams {
  size: number
  status: MyAppointmentStatus
}
