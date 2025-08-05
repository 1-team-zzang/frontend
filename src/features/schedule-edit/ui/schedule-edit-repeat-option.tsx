import { format } from 'date-fns'
import { ko } from 'date-fns/locale'
import { useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

import ScheduleEditDayPicker from '@/features/schedule-edit/ui/schedule-edit-date-picker'
import { Text } from '@/shared/ui'
import { Input } from '@/shared/ui/input'

import type { RepeatType } from '@/entities/schedule'

export default function ScheduleEditRepeatOption() {
  const { control, watch, setValue } = useFormContext()
  const [isRepeatEndOpen, setIsRepeatEndOpen] = useState(false)
  const [repeatEndDate, setRepeatEndDate] = useState(format(new Date(), 'yyyy-MM-dd HH:mm'))

  const repeatType = watch('repeatMode') as RepeatType
  const today = new Date()

  const handleRepeatEndDateConfirm = (date: Date) => {
    const parsedDate = format(date, 'yyyy-MM-dd HH:mm')
    setRepeatEndDate(parsedDate)
    setValue('repeatEndAt', parsedDate)
  }

  return (
    <div>
      <div className="flex gap-3">
        <div className="flex justify-center items-center gap-1.5">
          <Text
            as="button"
            type="button"
            typography="b2-normal"
            className={`h-[2.125rem] px-3 py-1 rounded-full ${repeatType === 'COUNT' ? 'bg-primary-30' : 'bg-gray-5'}`}
            onClick={() => setValue('repeatMode', 'COUNT')}
          >
            횟수
          </Text>
          <Text
            as="button"
            type="button"
            typography="b2-normal"
            className={`h-[2.125rem] px-3 py-1 rounded-full ${repeatType === 'DATE' ? 'bg-primary-30' : 'bg-gray-5'}`}
            onClick={() => setValue('repeatMode', 'DATE')}
          >
            종료일
          </Text>
        </div>
        {repeatType === 'COUNT' && (
          <div className="flex items-center gap-2.5">
            <Controller
              control={control}
              name="repeatCount"
              defaultValue={1}
              render={({ field }) => (
                <Input
                  type="number"
                  className="w-12 px-4 py-2.5 text-center bg-gray-5 rounded-[0.25rem] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              )}
            />
            <Text typography="b2-normal">회 반복</Text>
          </div>
        )}
        {repeatType === 'DATE' && (
          <div className="flex items-center gap-2">
            <Text
              as="button"
              type="button"
              typography="b2-normal"
              className="bg-gray-5 px-4 py-2.5 rounded-[0.25rem]"
              onClick={() => setIsRepeatEndOpen(true)}
            >
              {format(new Date(repeatEndDate), 'yyyy.MM.dd', { locale: ko })}
            </Text>
            <span>까지</span>

            <ScheduleEditDayPicker
              open={isRepeatEndOpen}
              onOpenChange={setIsRepeatEndOpen}
              initialDate={new Date(repeatEndDate)}
              onConfirm={handleRepeatEndDateConfirm}
              today={today}
            />
          </div>
        )}
      </div>
    </div>
  )
}
