import { useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

import { IconQuestion, IconTemp } from '@/shared/assets/icons'

import {
  BottomSheet,
  BottomSheetContainer,
  BottomSheetContent,
  BottomSheetHeader,
  BottomSheetHeaderButton,
  BottomSheetHeaderTitle,
} from '../../../shared/ui/bottom-sheet'
import { Radio, RadioGroup } from '../../../shared/ui/radio'
import Text from '../../../shared/ui/text/text'

export default function ScheduleEditVisible() {
  const { control, watch } = useFormContext()
  const [isVisibleOpen, setIsVisibleOpen] = useState(false)
  const [question, setQuestion] = useState(false)

  const visible = watch('visible') as 'visible' | 'invisible'

  const visibleLabelMap: Record<'visible' | 'invisible', string> = {
    visible: '전체 공개',
    invisible: '나만 보기',
  }

  const openVisibleBottomSheet = () => {
    setIsVisibleOpen(true)
  }

  return (
    <div className="flex py-4 justify-between items-center border-b border-gray-10">
      <Text typography={'b2-heading'}>공개</Text>
      <Text as="button" type="button" onClick={openVisibleBottomSheet} typography={'b2-normal'}>
        {visibleLabelMap[visible]}
      </Text>
      <BottomSheet open={isVisibleOpen} onOpenChange={setIsVisibleOpen}>
        <BottomSheetContainer>
          <BottomSheetHeader>
            <BottomSheetHeaderTitle>공개 설정</BottomSheetHeaderTitle>
            <BottomSheetHeaderButton type="button" onClick={() => setIsVisibleOpen(false)}>
              완료
            </BottomSheetHeaderButton>
          </BottomSheetHeader>
          <BottomSheetContent>
            <Controller
              control={control}
              name="visible"
              render={() => (
                <RadioGroup className="flex flex-col gap-6" name="visible">
                  <Radio value="visible">전체 공개</Radio>
                  <div className="flex justify-between">
                    <Radio value="invisible">나만 보기</Radio>
                    <button type="button" onClick={() => setQuestion(!question)}>
                      <IconQuestion />
                    </button>
                  </div>
                  {question && <IconTemp className="flex self-end" />}
                </RadioGroup>
              )}
            />
          </BottomSheetContent>
        </BottomSheetContainer>
      </BottomSheet>
    </div>
  )
}
