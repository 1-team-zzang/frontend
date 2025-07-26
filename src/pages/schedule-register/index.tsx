import { zodResolver } from '@hookform/resolvers/zod'
import { addHours, format, setMilliseconds, setMinutes, setSeconds } from 'date-fns'
import { ko } from 'date-fns/locale'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import z from 'zod'

import { IconArrowLeft, IconQuestion, IconTemp } from '@/shared/assets/icons'
import {
  BottomSheet,
  BottomSheetContainer,
  BottomSheetHeader,
  BottomSheetHeaderTitle,
  BottomSheetHeaderButton,
  BottomSheetContent,
} from '@/shared/ui/bottom-sheet'
import { Form, FormField } from '@/shared/ui/form'
import { GNB } from '@/shared/ui/gnb'
import { Input } from '@/shared/ui/input'
import { Radio, RadioGroup } from '@/shared/ui/radio'
import { Switch, SwitchTrigger } from '@/shared/ui/switch'
import Text from '@/shared/ui/text/text'
import { devLog } from '@/shared/utils/dev-log'

import SelectColorModal from './select-color-modal'

// form 설정
const ScheduleSchema = z.object({
  title: z.string().min(1, '일정 제목을 적어주세요'),
  color: z.string(),
  repeat: z.string(),
  visible: z.string(),
  contents: z.string().min(1, '일정 내용을 적어주세요'),
})

type ScheduleFormType = z.infer<typeof ScheduleSchema>

export default function ScheduleRegister() {
  const methods = useForm<ScheduleFormType>({
    resolver: zodResolver(ScheduleSchema),
    mode: 'onChange',
    defaultValues: {
      title: '',
      color: 'red',
      repeat: 'none',
      visible: 'visible',
      contents: '',
    },
  })

  const onSubmit = (value: ScheduleFormType) => {
    devLog('log', value)
  }

  const navigate = useNavigate()

  const onClickButton = () => {
    navigate(-1)
  }
  //이전 페이지로 갈 수 없을 경우도 만들어야함

  //색 설정
  const [isColorOpen, setIsColorOpen] = useState(false)
  const [selectedColor, setSelectedColor] = useState<Color>('red')

  type Color = 'red' | 'yellow' | 'green' | 'blue' | 'purple'

  const colorMap: Record<Color, string> = {
    red: 'bg-calendar-red',
    yellow: 'bg-calendar-yellow',
    green: 'bg-calendar-green',
    blue: 'bg-calendar-blue',
    purple: 'bg-calendar-purple',
  }

  const setColor = (color: Color) => {
    methods.setValue('color', color)
  }

  //시간 설정
  const now = new Date()
  const startTime = setMilliseconds(setSeconds(setMinutes(addHours(now, 1), 0), 0), 0)

  const endTime = addHours(startTime, 1)

  //하루 종일 스위치
  const [isChecked, setIsChecked] = useState(false)

  //반복 바텀 시트
  const [isRepeatOpen, setIsRepeatOpen] = useState(false)
  const [isVisibleOpen, setIsVisibleOpen] = useState(false)
  const [question, setQuestion] = useState(false)

  type Repeat = 'none' | 'day' | 'week' | 'month' | 'year'
  type Visible = 'visible' | 'invisible'

  const repeat = methods.watch('repeat') as Repeat
  const repeatLabelMap: Record<Repeat, string> = {
    none: '반복 안함',
    day: '일 단위 반복',
    week: '주 단위 반복',
    month: '월 단위 반복',
    year: '연 단위 반복',
  }

  const visible = methods.watch('visible') as Visible
  const visibleLabelMap: Record<Visible, string> = {
    visible: '전체 공개',
    invisible: '나만 보기',
  }

  const openRepeatBottomSheet = () => {
    setIsRepeatOpen(true)
    setIsVisibleOpen(false)
  }

  const openVisibleBottomSheet = () => {
    setIsRepeatOpen(false)
    setIsVisibleOpen(true)
  }

  //완료 버튼을 누르지 않았을 때는 선택한 값이 반영되지 않아야 할 것 같음...

  return (
    <div>
      <GNB />
      <Form methods={methods} onSubmit={onSubmit}>
        <div className="flex justify-between items-center px-[1.25rem] py-[0.625rem]">
          <IconArrowLeft onClick={onClickButton} className=" cursor-pointer" />
          <Text typography={'h2-heading'}>일정 등록</Text>
          <Text as="button" type="submit" typography={'b2-normal'}>
            저장
          </Text>
        </div>
        <div className="flex flex-col px-4">
          <FormField name="title" className="flex flex-col py-4 gap-2 border-b border-gray-10">
            <Text typography={'b2-heading'}>일정 제목</Text>
            <Input placeholder="일정 제목을 적어주세요" />
          </FormField>
          <FormField name="color">
            <div className="flex py-4 justify-between items-center border-b border-gray-10">
              <Text typography={'b2-heading'}>색 설정</Text>
              <button
                type="button"
                onClick={() => {
                  setIsColorOpen(true)
                }}
                className={`rounded-full w-[1.75rem] h-[1.75rem] ${colorMap[selectedColor]}`}
              />
            </div>
          </FormField>
          <SelectColorModal
            isColorOpen={isColorOpen}
            setIsColorOpen={setIsColorOpen}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            setColor={setColor}
          />
          <div className="flex flex-col py-4 gap-4 border-b border-gray-10 font-normal text-base leading-[1.6] tracking-[-0.04rem]">
            <div className="flex justify-between items-center">
              <Text typography={'b2-heading'}>시작</Text>
              <div className="flex gap-2">
                <div>{format(startTime, 'yyyy.MM.dd (eee)', { locale: ko })}</div>
                {!isChecked && <div>{format(startTime, 'a h:mm', { locale: ko })}</div>}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <Text typography={'b2-heading'}>종료</Text>
              <div className="flex gap-2">
                <div>{format(endTime, 'yyyy.MM.dd (eee)', { locale: ko })}</div>
                {!isChecked && <div>{format(endTime, 'a h:mm', { locale: ko })}</div>}
              </div>
            </div>
          </div>
          <div className="flex py-4 justify-between items-center border-b border-gray-10">
            <Text typography={'b2-heading'}>하루 종일</Text>
            <Switch checked={isChecked} onCheckedChange={setIsChecked}>
              <SwitchTrigger />
            </Switch>
          </div>
          <FormField name="repeat">
            <div className="flex py-4 justify-between items-center border-b border-gray-10">
              <Text typography={'b2-heading'}>반복</Text>
              <Text as="button" type="button" onClick={openRepeatBottomSheet} typography={'b2-normal'}>
                {repeatLabelMap[repeat]}
              </Text>
              {isRepeatOpen && (
                <div
                  className="fixed inset-0 backdrop-blur-[0.1rem] z-1"
                  onClick={() => setIsRepeatOpen(false)}
                  aria-hidden
                />
              )}
              <BottomSheet defaultOpen={false} open={isRepeatOpen} onOpenChange={setIsRepeatOpen}>
                <BottomSheetContainer>
                  <BottomSheetHeader>
                    <BottomSheetHeaderTitle>일정 등록</BottomSheetHeaderTitle>
                    <BottomSheetHeaderButton type="button" onClick={() => setIsRepeatOpen(false)}>
                      완료
                    </BottomSheetHeaderButton>
                  </BottomSheetHeader>
                  <BottomSheetContent>
                    <RadioGroup className="flex flex-col gap-6" name="repeat">
                      <Radio value="none">반복 안함</Radio>
                      <Radio value="day">일 단위 반복</Radio>
                      <Radio value="week">주 단위 반복</Radio>
                      <Radio value="month">월 단위 반복</Radio>
                      <Radio value="year">연 단위 반복</Radio>
                    </RadioGroup>
                  </BottomSheetContent>
                </BottomSheetContainer>
              </BottomSheet>
            </div>
          </FormField>
          <FormField name="visible">
            <div className="flex py-4 justify-between items-center border-b border-gray-10">
              <Text typography={'b2-heading'}>공개</Text>
              <Text as="button" type="button" onClick={openVisibleBottomSheet} typography={'b2-normal'}>
                {visibleLabelMap[visible]}
              </Text>
              {isVisibleOpen && (
                <div
                  className="fixed inset-0 backdrop-blur-[0.1rem] z-1"
                  onClick={() => setIsVisibleOpen(false)}
                  aria-hidden
                />
              )}
              <BottomSheet defaultOpen={false} open={isVisibleOpen} onOpenChange={setIsVisibleOpen}>
                <BottomSheetContainer>
                  <BottomSheetHeader>
                    <BottomSheetHeaderTitle>공개 설정</BottomSheetHeaderTitle>
                    <BottomSheetHeaderButton type="button" onClick={() => setIsVisibleOpen(false)}>
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
            </div>
          </FormField>
          <FormField name="contents">
            <div className="flex flex-col py-4 gap-2 border-b border-gray-10">
              <Text typography={'b2-heading'}>일정 내용</Text>
              <Input placeholder="내용을 적어주세요." />
            </div>
          </FormField>
        </div>
      </Form>
    </div>
  )
}
