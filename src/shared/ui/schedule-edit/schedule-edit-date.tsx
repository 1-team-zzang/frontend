import { format } from 'date-fns'
import { ko } from 'date-fns/locale'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'

import ScheduleEditDayPicker from '@/shared/ui/schedule-edit/schedule-edit-date-picker'
import ScheduleEditTimePicker from '@/shared/ui/schedule-edit/schedule-edit-time-picker'

import Text from '../text/text'
import { toast } from '../toast'

export default function ScheduleEditDate() {
  const { setValue, watch } = useFormContext()
  const [isStartDayOpen, setIsStartDayOpen] = useState(false)
  const [isEndDayOpen, setIsEndDayOpen] = useState(false)
  const [isStartTimeOpen, setIsStartTimeOpen] = useState(false)
  const [isEndTimeOpen, setIsEndTimeOpen] = useState(false)

  const start = watch('start')
  const end = watch('end')
  const isAllDay = watch('isAllDay')

  const today = new Date()

  const handleStartDayConfirm = (date: Date) => {
    if (end < date) {
      setValue('start', date)
      setValue('end', date)
      toast.error('종료 시간은 시작 시간 이후여야 합니다.')
      return
    }
    setValue('start', date)
  }

  const handleEndDayConfirm = (date: Date) => {
    if (date < start) {
      toast.error('종료 시간은 시작 시간 이후여야 합니다.')
      return
    }
    setValue('end', date)
  }

  const handleStartTimeConfirm = (date: Date) => {
    if (end < date) {
      setValue('start', date)
      setValue('end', date)
      toast.error('종료 시간은 시작 시간 이후여야 합니다.')
      return
    }
    setValue('start', date)
  }

  const handleEndTimeConfirm = (date: Date) => {
    if (date < start) {
      toast.error('종료 시간은 시작 시간 이후여야 합니다.')
      return
    }
    setValue('end', date)
  }

  return (
    <div className="flex flex-col py-4 gap-4 border-b border-gray-10 font-normal text-base leading-[1.6] tracking-[-0.04rem]">
      <div className="flex justify-between items-center">
        <Text typography={'b2-heading'}>시작</Text>
        <div className="flex gap-2">
          <Text
            typography="b2-normal"
            as="button"
            type="button"
            className="bg-gray-5 px-2 rounded-lg"
            onClick={() => setIsStartDayOpen(true)}
          >
            {format(start, 'yyyy.MM.dd (eee)', { locale: ko })}
          </Text>
          {!isAllDay && (
            <Text
              typography="b2-normal"
              as="button"
              type="button"
              className="bg-gray-5 px-2 rounded-lg"
              onClick={() => setIsStartTimeOpen(true)}
            >
              {format(start, 'a h:mm', { locale: ko })}
            </Text>
          )}
        </div>
      </div>
      <ScheduleEditDayPicker
        open={isStartDayOpen}
        onOpenChange={setIsStartDayOpen}
        initialDate={start}
        onConfirm={handleStartDayConfirm}
        today={today}
      />
      <ScheduleEditTimePicker
        open={isStartTimeOpen}
        onOpenChange={setIsStartTimeOpen}
        initialDate={start}
        onConfirm={handleStartTimeConfirm}
      />
      <div className="flex justify-between items-center">
        <Text typography={'b2-heading'}>종료</Text>
        <div className="flex gap-2">
          <Text
            typography="b2-normal"
            as="button"
            type="button"
            className="bg-gray-5 px-2 rounded-lg"
            onClick={() => setIsEndDayOpen(true)}
          >
            {format(end, 'yyyy.MM.dd (eee)', { locale: ko })}
          </Text>
          {!isAllDay && (
            <Text
              typography="b2-normal"
              as="button"
              type="button"
              onClick={() => setIsEndTimeOpen(true)}
              className="bg-gray-5 px-2 rounded-lg"
            >
              {format(end, 'a h:mm', { locale: ko })}
            </Text>
          )}
        </div>
      </div>
      <ScheduleEditDayPicker
        open={isEndDayOpen}
        onOpenChange={setIsEndDayOpen}
        initialDate={end}
        onConfirm={handleEndDayConfirm}
        today={today}
      />
      <ScheduleEditTimePicker
        open={isEndTimeOpen}
        onOpenChange={setIsEndTimeOpen}
        initialDate={end}
        onConfirm={handleEndTimeConfirm}
      />
    </div>
  )
}
