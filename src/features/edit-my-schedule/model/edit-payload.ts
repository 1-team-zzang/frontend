import { formatDateToString } from '@/features/schedule-edit/model/format-date-to-string'

import type { EditScheduleRequest } from '@/features/edit-my-schedule/model/edit-schedule.types'
import type { RegisterScheduleFormType } from '@/features/schedule-edit/model/schedule.schema'

export function editPayload(formData: RegisterScheduleFormType, scheduleId: string): EditScheduleRequest {
  return {
    scheduleId,
    title: formData.title,
    content: formData.content,
    color: formData.color,
    startAt: formatDateToString(formData.start),
    endAt: formatDateToString(formData.end),
    isAllDay: formData.isAllDay,
    isVisible: formData.visible === 'visible',
    isRepeated: formData.repeatRule !== '',
    repeatRule: formData.repeatRule,
    interval: formData.interval,
    repeatType: formData.repeatType,
    repeatCount: formData.repeatType === 'COUNT' ? formData.repeatCount : undefined,
    repeatEndAt: formData.repeatType === 'DATE' && formData.repeatEndAt ? formData.repeatEndAt : undefined,
  }
}
