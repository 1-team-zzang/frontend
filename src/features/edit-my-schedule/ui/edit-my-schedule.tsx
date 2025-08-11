import { useParams } from 'react-router'

import { useDetailedSchedule } from '@/entities/schedule/model'
import {
  RegisterScheduleFormProvider,
  ScheduleEditAllDay,
  ScheduleEditColor,
  ScheduleEditContent,
  ScheduleEditDate,
  ScheduleEditHeader,
  ScheduleEditRepeat,
  ScheduleEditTitle,
  ScheduleEditVisible,
} from '@/features/schedule-edit/ui'

import { editPayload, useEditScheduleMutation } from '../model'

import type { RegisterScheduleFormType } from '@/features/schedule-edit/model/schedule.schema'

export default function EditMySchedule() {
  const { scheduleId } = useParams<{ scheduleId: string }>()
  const { mutate } = useEditScheduleMutation(scheduleId!)
  const data = useDetailedSchedule(scheduleId!)

  const onSubmit = (formData: RegisterScheduleFormType) => {
    if (!scheduleId) {
      return
    }

    const payload = editPayload(formData, scheduleId)
    mutate(payload)
  }

  return (
    <RegisterScheduleFormProvider
      onSubmit={onSubmit}
      defaultValues={{
        title: data.title,
        content: data.content,
        color: data.color,
        start: new Date(data.startAt),
        end: new Date(data.endAt),
        isAllDay: data.isAllDay,
        visible: data.isVisible ? 'visible' : 'invisible',
        repeatRule: data.repeatRule,
        repeatType: data.repeatType,
        repeatCount: data.repeatCount ?? undefined,
        repeatEndAt: data.repeatEndAt ?? undefined,
      }}
    >
      <ScheduleEditHeader title="일정 수정" />
      <div className="flex flex-col h-[calc(100vh-109px)] px-4 overflow-y-auto scrollbar-hide">
        <ScheduleEditTitle />
        <ScheduleEditColor />
        <ScheduleEditDate />
        <ScheduleEditAllDay />
        <ScheduleEditRepeat />
        <ScheduleEditVisible />
        <ScheduleEditContent />
      </div>
    </RegisterScheduleFormProvider>
  )
}
