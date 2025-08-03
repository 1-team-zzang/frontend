import { useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

import {
  BottomSheet,
  BottomSheetContainer,
  BottomSheetContent,
  BottomSheetHeader,
  BottomSheetHeaderButton,
  BottomSheetHeaderTitle,
} from '../bottom-sheet'
import { Radio, RadioGroup } from '../radio'
import Text from '../text/text'

import ScheduleEditRepeatOption from './schedule-edit-repeat-option'

import type { RepeatRule } from '@/entities/schedule'

export default function ScheduleEditRepeat() {
  const { control, watch } = useFormContext()
  const [isRepeatOpen, setIsRepeatOpen] = useState(false)

  const repeat = watch('repeatRule') as RepeatRule

  const repeatLabelMap: Record<RepeatRule, string> = {
    DAILY: '일 단위 반복',
    WEEKLY: '주 단위 반복',
    MONTHLY: '월 단위 반복',
    YEARLY: '연 단위 반복',
    '': '반복 안함',
  }

  const openRepeatBottomSheet = () => {
    setIsRepeatOpen(true)
  }

  return (
    <div className="flex py-4 justify-between items-center border-b border-gray-10">
      <Text typography={'b2-heading'}>반복</Text>
      <Text as="button" type="button" onClick={openRepeatBottomSheet} typography={'b2-normal'}>
        {repeatLabelMap[repeat]}
      </Text>
      <BottomSheet open={isRepeatOpen} onOpenChange={setIsRepeatOpen}>
        <BottomSheetContainer className="h-[475px]">
          <BottomSheetHeader>
            <BottomSheetHeaderTitle>일정 등록</BottomSheetHeaderTitle>
            <BottomSheetHeaderButton type="button" onClick={() => setIsRepeatOpen(false)}>
              완료
            </BottomSheetHeaderButton>
          </BottomSheetHeader>
          <BottomSheetContent>
            <Controller
              control={control}
              name="repeatRule"
              defaultValue="none"
              render={({ field }) => (
                <RadioGroup className="flex flex-col gap-6" name="repeatRule">
                  <div>
                    <Radio value="none">반복 안함</Radio>
                  </div>
                  <div>
                    <Radio value="day">일 단위 반복</Radio>
                    {field.value === 'day' && (
                      <div key="repeat-day" className="mt-2 flex flex-col gap-4 pl-6">
                        <ScheduleEditRepeatOption />
                      </div>
                    )}
                  </div>
                  <div>
                    <Radio value="week">주 단위 반복</Radio>
                    {field.value === 'week' && (
                      <div key="repeat-week" className="mt-2 flex flex-col gap-4 pl-6">
                        <ScheduleEditRepeatOption />
                      </div>
                    )}
                  </div>
                  <div>
                    <Radio value="month">월 단위 반복</Radio>
                    {field.value === 'month' && (
                      <div key="repeat-month" className="mt-2 flex flex-col gap-4 pl-6">
                        <ScheduleEditRepeatOption />
                      </div>
                    )}
                  </div>
                  <div>
                    <Radio value="year">연 단위 반복</Radio>
                    {field.value === 'year' && (
                      <div key="repeat-year" className="mt-2 flex flex-col gap-4 pl-6">
                        <ScheduleEditRepeatOption />
                      </div>
                    )}
                  </div>
                </RadioGroup>
              )}
            />
          </BottomSheetContent>
        </BottomSheetContainer>
      </BottomSheet>
    </div>
  )
}
