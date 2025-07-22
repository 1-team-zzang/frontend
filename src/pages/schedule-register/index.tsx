import { addHours, format, setMilliseconds, setMinutes, setSeconds } from 'date-fns'
import { ko } from 'date-fns/locale'
import { useState } from 'react'
import { useNavigate } from 'react-router'

import { IconArrowLeft } from '@/shared/assets/icons'
import {
  BottomSheet,
  BottomSheetContainer,
  BottomSheetHeader,
  BottomSheetHeaderTitle,
  BottomSheetHeaderButton,
  BottomSheetContent,
} from '@/shared/ui/bottom-sheet'
import { GNB } from '@/shared/ui/gnb'
import { Radio, RadioGroup } from '@/shared/ui/radio'
import { Switch, SwitchTrigger } from '@/shared/ui/switch'
import Text from '@/shared/ui/text/text'
export default function ScheduleRegister() {
  const navigate = useNavigate()

  const onClickButton = () => {
    navigate(-1)
  }
  //이전 페이지로 갈 수 없을 경우도 만들어야함

  //일정 제목
  const [title, setTitle] = useState('')

  //시간 설정
  const now = new Date()
  const startTime = setMilliseconds(setSeconds(setMinutes(addHours(now, 1), 0), 0), 0)

  const endTime = addHours(startTime, 1)

  //하루 종일 스위치
  const [isChecked, setIsChecked] = useState(false)

  //반복 바텀 시트
  const [isRepeatOpen, setIsRepeatOpen] = useState(false)
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [selecedRepeat, setSelectedRepeat] = useState('none')

  //공개 바텀 시트
  const [isVisibleOpen, setIsVisibleOpen] = useState(false)
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [selectedVisible, setSelectedVisible] = useState('visible')

  //바텀 시트 눌렀을 때 다른 바텀 시트는 사라지는 기능 추가하기

  //   const badgeVariants = cva('w-1 h-3 text-black rounded-sm z-50', {
  //     variants: {
  //       color: {
  //         redAlt: 'bg-calendar-red-alt',
  //         yellowAlt: 'bg-calendar-yellow-alt',
  //         greenAlt: 'bg-calendar-green-alt',
  //         blueAlt: 'bg-calendar-blue-alt',
  //         purpleAlt: 'bg-calendar-purple-alt',
  //       },
  //     },
  //   })
  return (
    <div>
      <GNB />
      <div className="flex justify-between items-center px-[1.25rem] py-[0.625rem]">
        <IconArrowLeft onClick={onClickButton} className=" cursor-pointer" />
        <Text typography={'h2-heading'}>일정 등록</Text>
        <Text as="button" typography={'b2-normal'}>
          저장
        </Text>
      </div>
      <div className="flex flex-col px-4">
        <div className="flex flex-col py-4 gap-2 border-b border-gray-10">
          <Text typography={'b2-heading'}>일정 제목</Text>
          <input
            value={title}
            className="bg-gray-1 text-gray-40 font-normal text-base leading-[1.6] tracking-[-0.04rem] rounded-s px-4 py-2.5 focus:outline-none"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="일정 제목을 적어주세요"
          />
        </div>
        <div className="flex py-4 justify-between items-center border-b border-gray-10">
          <Text typography={'b2-heading'}>색 설정</Text>
          <div className="rounded-full w-[1.75rem] h-[1.75rem] bg-primary-50" />
        </div>
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
        <div className="flex py-4 justify-between items-center border-b border-gray-10">
          <Text typography={'b2-heading'}>반복</Text>
          <Text as="button" onClick={() => setIsRepeatOpen(true)} typography={'b2-normal'}>
            {selecedRepeat}
          </Text>
          <BottomSheet defaultOpen={false} open={isRepeatOpen} onOpenChange={setIsRepeatOpen}>
            <BottomSheetContainer>
              <BottomSheetHeader>
                <BottomSheetHeaderTitle>일정 등록</BottomSheetHeaderTitle>
                <BottomSheetHeaderButton onClick={() => setIsRepeatOpen(false)}>완료</BottomSheetHeaderButton>
              </BottomSheetHeader>
              <BottomSheetContent>
                <div>
                  <RadioGroup className="flex flex-col gap-6" name="repeat" defaultValue={selecedRepeat}>
                    <Radio value="none">반복 안함</Radio>
                    <Radio value="day">일 단위 반복</Radio>
                    <Radio value="week">주 단위 반복</Radio>
                    <Radio value="month">월 단위 반복</Radio>
                    <Radio value="year">연 단위 반복</Radio>
                  </RadioGroup>
                </div>
              </BottomSheetContent>
            </BottomSheetContainer>
          </BottomSheet>
        </div>
        <div className="flex py-4 justify-between items-center border-b border-gray-10">
          <Text typography={'b2-heading'}>공개</Text>
          <Text as="button" onClick={() => setIsVisibleOpen(true)} typography={'b2-normal'}>
            나만 보기
          </Text>
          <BottomSheet defaultOpen={false} open={isVisibleOpen} onOpenChange={setIsVisibleOpen}>
            <BottomSheetContainer>
              <BottomSheetHeader>
                <BottomSheetHeaderTitle>일정 등록</BottomSheetHeaderTitle>
                <BottomSheetHeaderButton onClick={() => setIsVisibleOpen(false)}>완료</BottomSheetHeaderButton>
              </BottomSheetHeader>
              <BottomSheetContent>
                <RadioGroup className="flex flex-col gap-6" name="visible" defaultValue={selectedVisible}>
                  <Radio value="visible">전체 공개</Radio>
                  <Radio value="invisible">나만 보기</Radio>
                </RadioGroup>
              </BottomSheetContent>
            </BottomSheetContainer>
          </BottomSheet>
        </div>
        <div className="flex flex-col py-4 gap-2 border-b border-gray-10">
          <Text typography={'b2-heading'}>일정 내용</Text>
          <input placeholder="내용을 적어주세요." />
        </div>
      </div>
    </div>
  )
}
