import { useState } from 'react'

import { IconQuestion, IconTemp } from '@/shared/assets/icons'
import {
  BottomSheet,
  BottomSheetContainer,
  BottomSheetHeader,
  BottomSheetHeaderTitle,
  BottomSheetHeaderButton,
  BottomSheetContent,
} from '@/shared/ui/bottom-sheet'
import { Radio, RadioGroup } from '@/shared/ui/radio'

interface ScheduleVisibleBottomSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function ScheduleVisibleBottomSheet({ open, onOpenChange }: ScheduleVisibleBottomSheetProps) {
  const [question, setQuestion] = useState(false)

  return (
    <BottomSheet defaultOpen={false} open={open} onOpenChange={onOpenChange}>
      <BottomSheetContainer>
        <BottomSheetHeader>
          <BottomSheetHeaderTitle>공개 설정</BottomSheetHeaderTitle>
          <BottomSheetHeaderButton type="button" onClick={() => onOpenChange(false)}>
            완료
          </BottomSheetHeaderButton>
        </BottomSheetHeader>
        <BottomSheetContent>
          <RadioGroup className="flex flex-col gap-6" name="visible">
            <Radio value="visible">전체 공개</Radio>
            <div className="flex justify-between">
              <Radio value="invisible">나만 보기</Radio>
              <IconQuestion type="button" onClick={() => setQuestion(!question)} />
            </div>
            {question && <IconTemp className="flex self-end" />}
          </RadioGroup>
        </BottomSheetContent>
      </BottomSheetContainer>
    </BottomSheet>
  )
}
