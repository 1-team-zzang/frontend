import { useForm } from 'react-hook-form'

import {
  BottomSheet,
  BottomSheetContainer,
  BottomSheetHeader,
  BottomSheetHeaderTitle,
  BottomSheetHeaderButton,
  BottomSheetContent,
} from '@/shared/ui/bottom-sheet'
import { Input } from '@/shared/ui/input'
import { Radio, RadioGroup } from '@/shared/ui/radio'

import RepeatDetailOptions from './schedule-repeat-option'

type RepeatUnit = 'none' | 'day' | 'week' | 'month' | 'year'

interface ScheduleRepeatBottomSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  methods: ReturnType<typeof useForm>
  repeat: RepeatUnit
}

export default function ScheduleRepeatBottomSheet({
  open,
  onOpenChange,
  methods,
  repeat,
}: ScheduleRepeatBottomSheetProps) {
  return (
    <BottomSheet defaultOpen={false} open={open} onOpenChange={onOpenChange}>
      <BottomSheetContainer>
        <BottomSheetHeader>
          <BottomSheetHeaderTitle>일정 등록</BottomSheetHeaderTitle>
          <BottomSheetHeaderButton type="button" onClick={() => onOpenChange(false)}>
            완료
          </BottomSheetHeaderButton>
        </BottomSheetHeader>
        <BottomSheetContent>
          <RadioGroup className="flex flex-col gap-6" name="repeatUnit">
            <div>
              <Radio value="none">반복 안함</Radio>
            </div>
            {['day', 'week', 'month', 'year'].map((unit) => (
              <div key={unit}>
                <Radio value={unit as RepeatUnit}>
                  {unit === 'day'
                    ? '일 단위 반복'
                    : unit === 'week'
                      ? '주 단위 반복'
                      : unit === 'month'
                        ? '월 단위 반복'
                        : '연 단위 반복'}
                </Radio>
                {repeat === unit && (
                  <div className="mt-2 flex flex-col gap-4 pl-6">
                    <div className="flex items-center gap-2">
                      <Input
                        type="number"
                        className="w-16 text-center"
                        {...methods.register('interval', { valueAsNumber: true })}
                      />
                      <span>
                        {unit === 'day'
                          ? '일 마다'
                          : unit === 'week'
                            ? '주 마다'
                            : unit === 'month'
                              ? '월 마다'
                              : '년 마다'}
                      </span>
                    </div>
                    <RepeatDetailOptions methods={methods} />
                  </div>
                )}
              </div>
            ))}
          </RadioGroup>
        </BottomSheetContent>
      </BottomSheetContainer>
    </BottomSheet>
  )
}
