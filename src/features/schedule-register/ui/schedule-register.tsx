import { zodResolver } from '@hookform/resolvers/zod'
import { addHours, format, setMilliseconds, setMinutes, setSeconds } from 'date-fns'
import { ko } from 'date-fns/locale'
import { useEffect, useState } from 'react'
import { useForm, useWatch, Controller } from 'react-hook-form'
import { useNavigate } from 'react-router'
import z from 'zod'

import { IconAppointmentArrowLeft, IconQuestion, IconTemp } from '@/shared/assets/icons'
import {
  BottomSheet,
  BottomSheetContainer,
  BottomSheetHeader,
  BottomSheetHeaderTitle,
  BottomSheetHeaderButton,
  BottomSheetContent,
} from '@/shared/ui/bottom-sheet'
import { Form, FormField } from '@/shared/ui/form'
import { Input, Textarea } from '@/shared/ui/input'
import { Radio, RadioGroup } from '@/shared/ui/radio'
import { Switch, SwitchTrigger } from '@/shared/ui/switch'
import Text from '@/shared/ui/text/text'
import { devLog } from '@/shared/utils/dev-log'

import { createSchedule, type CreateScheduleRequest } from '../api/schedule-register.API'

import ScheduleDatePicker from './schedule-date-picker'
import ScheduleTimePicker from './schedule-time-picker'
import SelectColorModal from './select-color-modal'

//기본 날짜 설정
const today = new Date()
const InitialStart = setMilliseconds(setSeconds(setMinutes(addHours(today, 1), 0), 0), 0)
const InitialEnd = addHours(InitialStart, 1)

//form 설정
const ScheduleSchema = z
  .object({
    title: z.string().min(1, '일정 제목을 적어주세요'),
    color: z.string(),
    start: z.date(),
    end: z.date(),
    repeatUnit: z.enum(['none', 'day', 'week', 'month', 'year']),
    interval: z.number().min(1),
    repeatMode: z.enum(['count', 'date']).optional(),
    repeatCount: z.number().min(1),
    repeatEndAt: z.date().nullable().optional(),
    visible: z.string(),
    content: z.string().min(1, '일정 내용을 적어주세요'),
  })
  .refine(
    (data) =>
      (data.repeatMode === 'count' && typeof data.repeatCount === 'number' && data.repeatCount > 0) ||
      (data.repeatMode === 'date' && data.repeatEndAt instanceof Date),
    {
      message: '반복 조건이 올바르지 않습니다.',
      path: ['repeatMode'],
    },
  )

type ScheduleFormType = z.infer<typeof ScheduleSchema>

export default function ScheduleRegister() {
  const navigate = useNavigate()
  const methods = useForm<ScheduleFormType>({
    resolver: zodResolver(ScheduleSchema),
    mode: 'onChange',
    defaultValues: {
      title: '',
      color: 'red',
      start: InitialStart,
      end: InitialEnd,
      repeatUnit: 'none',
      interval: 1,
      repeatMode: 'count',
      repeatCount: 1,
      repeatEndAt: null,
      visible: 'visible',
      content: '',
    },
    shouldUnregister: false,
  })

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

  //날짜, 시간 선택
  const [startTime, setStartTime] = useState(InitialStart)
  const [endTime, setEndTime] = useState(InitialEnd)

  const [isStartDayOpen, setIsStartDayOpen] = useState(false)
  const [isEndDayOpen, setIsEndDayOpen] = useState(false)

  const [isStartTimeOpen, setIsStartTimeOpen] = useState(false)
  const [isEndTimeOpen, setIsEndTimeOpen] = useState(false)

  useEffect(() => {
    methods.setValue('start', startTime)
  }, [startTime, methods])

  useEffect(() => {
    methods.setValue('end', endTime)
  }, [endTime, methods])

  //하루 종일 스위치
  const [isChecked, setIsChecked] = useState(false)

  //바텀 시트
  const [isRepeatOpen, setIsRepeatOpen] = useState(false)
  const [isVisibleOpen, setIsVisibleOpen] = useState(false)
  const [question, setQuestion] = useState(false)
  const [isRepeatEndOpen, setIsRepeatEndOpen] = useState(false)
  const [repeatEndDate, setRepeatEndDate] = useState<Date>(today)

  type RepeatUnit = 'none' | 'day' | 'week' | 'month' | 'year'
  type Visible = 'visible' | 'invisible'

  const repeat =
    useWatch({
      control: methods.control,
      name: 'repeatUnit',
    }) ?? 'none'

  // Track current repeat mode
  const repeatMode =
    useWatch({
      control: methods.control,
      name: 'repeatMode',
    }) ?? 'count'

  // Reset repeat settings when the repeat unit changes
  useEffect(() => {
    methods.setValue('repeatMode', 'count')
    methods.setValue('repeatCount', 1)
    methods.setValue('repeatEndAt', null)
  }, [repeat, methods])

  // When switching between count and date modes, clear the unused field
  useEffect(() => {
    if (repeatMode === 'count') {
      methods.setValue('repeatEndAt', null)
    } else {
      methods.setValue('repeatCount', 1)
      methods.setValue('repeatEndAt', repeatEndDate)
    }
  }, [repeatMode, repeatEndDate, methods])
  const repeatLabelMap: Record<RepeatUnit, string> = {
    none: '반복 안함',
    day: '일 단위 반복',
    week: '주 단위 반복',
    month: '월 단위 반복',
    year: '연 단위 반복',
  }

  const renderRepeatDetailOptions = () => (
    <div>
      <div className="flex gap-3">
        <div className="flex justify-center items-center gap-1.5">
          <Text
            as="button"
            type="button"
            typography="b2-normal"
            className={`h-[2.125rem] px-3 py-1 rounded-full ${
              methods.watch('repeatMode') === 'count' ? 'bg-primary-30' : 'bg-gray-5'
            }`}
            onClick={() => methods.setValue('repeatMode', 'count')}
          >
            횟수
          </Text>
          <Text
            as="button"
            type="button"
            typography="b2-normal"
            className={`h-[2.125rem] px-3 py-1 rounded-full ${
              methods.watch('repeatMode') === 'date' ? 'bg-primary-30' : 'bg-gray-5'
            }`}
            onClick={() => methods.setValue('repeatMode', 'date')}
          >
            종료일
          </Text>
        </div>
        {repeatMode === 'count' && (
          <div className="flex items-center gap-2.5">
            <Controller
              control={methods.control}
              name="repeatCount"
              defaultValue={1}
              render={({ field }) => (
                <Input
                  className="w-12 px-4 py-2.5 text-center bg-gray-5 rounded-[0.25rem]"
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              )}
            />
            <Text typography="b2-normal">회 반복</Text>
          </div>
        )}
        {methods.watch('repeatMode') === 'date' && (
          <div className="flex items-center gap-2">
            <Text
              as="button"
              type="button"
              typography="b2-normal"
              className="bg-gray-5 px-4 py-2.5 rounded-[0.25rem]"
              onClick={() => setIsRepeatEndOpen(true)}
            >
              {format(repeatEndDate, 'yyyy.MM.dd', { locale: ko })}
            </Text>
            <span>까지</span>

            <ScheduleDatePicker
              open={isRepeatEndOpen}
              onOpenChange={setIsRepeatEndOpen}
              initialDate={repeatEndDate}
              onConfirm={(date) => {
                setRepeatEndDate(date)
                methods.setValue('repeatEndAt', date)
              }}
              today={today}
            />
          </div>
        )}
      </div>
    </div>
  )

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

  //API
  const onSubmit = async (data: ScheduleFormType) => {
    const payload: CreateScheduleRequest = {
      title: data.title,
      content: data.content,
      startAt: data.start.toISOString(),
      endAt: data.end.toISOString(),
      isVisible: data.visible === 'visible',
      isAllDay: isChecked,
      isRepeated: data.repeatUnit !== 'none',
      repeatRule:
        data.repeatUnit === 'day'
          ? 'DAILY'
          : data.repeatUnit === 'week'
            ? 'WEEKLY'
            : data.repeatUnit === 'month'
              ? 'MONTHLY'
              : data.repeatUnit === 'year'
                ? 'YEARLY'
                : undefined,
      interval: data.interval,
      repeatType: data.repeatMode === 'count' ? 'COUNT' : 'DATE',
      repeatCount: data.repeatMode === 'count' ? data.repeatCount : undefined,
      repeatEndAt: data.repeatMode === 'date' && data.repeatEndAt ? data.repeatEndAt.toISOString() : undefined,
      color: data.color.toUpperCase(),
    }

    try {
      const result = await createSchedule(payload)
      devLog('log', result)
      navigate(-1)
    } catch (error) {
      devLog('error', error)
      alert('일정 등록 중 오류가 발생했습니다.')
    }
  }

  return (
    <div>
      <Form methods={methods} onSubmit={onSubmit}>
        <div className="flex justify-between items-center px-[1.25rem] py-[0.625rem]">
          <IconAppointmentArrowLeft onClick={onClickButton} className=" cursor-pointer" />
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
                <Text
                  typography="b2-normal"
                  as="button"
                  type="button"
                  className="bg-gray-5 px-2 rounded-lg"
                  onClick={() => setIsStartDayOpen(true)}
                >
                  {format(startTime, 'yyyy.MM.dd (eee)', { locale: ko })}
                </Text>
                {!isChecked && (
                  <Text
                    typography="b2-normal"
                    as="button"
                    type="button"
                    className="bg-gray-5 px-2 rounded-lg"
                    onClick={() => setIsStartTimeOpen(true)}
                  >
                    {format(startTime, 'a h:mm', { locale: ko })}
                  </Text>
                )}
              </div>
            </div>
            <ScheduleDatePicker
              open={isStartDayOpen}
              onOpenChange={setIsStartDayOpen}
              initialDate={startTime}
              onConfirm={(date) => setStartTime(date)}
              today={today}
            />
            <ScheduleTimePicker
              open={isStartTimeOpen}
              onOpenChange={setIsStartTimeOpen}
              initialDate={startTime}
              onConfirm={(date) => setStartTime(date)}
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
                  {format(endTime, 'yyyy.MM.dd (eee)', { locale: ko })}
                </Text>
                {!isChecked && (
                  <Text
                    typography="b2-normal"
                    as="button"
                    type="button"
                    onClick={() => setIsEndTimeOpen(true)}
                    className="bg-gray-5 px-2 rounded-lg"
                  >
                    {format(endTime, 'a h:mm', { locale: ko })}
                  </Text>
                )}
              </div>
            </div>
          </div>
          <ScheduleDatePicker
            open={isEndDayOpen}
            onOpenChange={setIsEndDayOpen}
            initialDate={endTime}
            onConfirm={(date) => {
              if (date < startTime) {
                alert('종료 날짜는 시작 날짜 이후여야 합니다.')
                return
              }
              setEndTime(date)
            }}
            today={today}
          />
          <ScheduleTimePicker
            open={isEndTimeOpen}
            onOpenChange={setIsEndTimeOpen}
            initialDate={endTime}
            onConfirm={(date) => {
              if (date < startTime) {
                alert('종료 시간은 시작 시간 이후여야 합니다.')
                return
              }
              setEndTime(date)
            }}
          />
          <div className="flex py-4 justify-between items-center border-b border-gray-10">
            <Text typography={'b2-heading'}>하루 종일</Text>
            <Switch checked={isChecked} onCheckedChange={setIsChecked}>
              <SwitchTrigger />
            </Switch>
          </div>
          <FormField name="repeatUnit">
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
                      control={methods.control}
                      name="repeatUnit"
                      defaultValue="none"
                      render={({ field }) => (
                        <RadioGroup className="flex flex-col gap-6" name="repeatUnit">
                          <div>
                            <Radio value="none">반복 안함</Radio>
                          </div>
                          <div>
                            <Radio value="day">일 단위 반복</Radio>
                            {field.value === 'day' && (
                              <div key="repeat-day" className="mt-2 flex flex-col gap-4 pl-6">
                                <div className="flex items-center gap-2">
                                  <Controller
                                    control={methods.control}
                                    name="interval"
                                    defaultValue={1}
                                    render={({ field }) => (
                                      <Input
                                        className="w-12 px-4 py-2.5 text-center bg-gray-5 rounded-[0.25rem]"
                                        {...field}
                                        onChange={(e) => field.onChange(Number(e.target.value))}
                                      />
                                    )}
                                  />
                                  <span>일 마다</span>
                                </div>
                                {renderRepeatDetailOptions()}
                              </div>
                            )}
                          </div>
                          <div>
                            <Radio value="week">주 단위 반복</Radio>
                            {field.value === 'week' && (
                              <div key="repeat-week" className="mt-2 flex flex-col gap-4 pl-6">
                                <div className="flex items-center gap-2">
                                  <Controller
                                    control={methods.control}
                                    name="interval"
                                    defaultValue={1}
                                    render={({ field }) => (
                                      <Input
                                        className="w-12 px-4 py-2.5 text-center bg-gray-5 rounded-[0.25rem]"
                                        {...field}
                                        onChange={(e) => field.onChange(Number(e.target.value))}
                                      />
                                    )}
                                  />
                                  <span>주 마다</span>
                                </div>
                                {renderRepeatDetailOptions()}
                              </div>
                            )}
                          </div>
                          <div>
                            <Radio value="month">월 단위 반복</Radio>
                            {field.value === 'month' && (
                              <div key="repeat-month" className="mt-2 flex flex-col gap-4 pl-6">
                                <div className="flex items-center gap-2">
                                  <Controller
                                    control={methods.control}
                                    name="interval"
                                    defaultValue={1}
                                    render={({ field }) => (
                                      <Input
                                        className="w-12 px-4 py-2.5 text-center bg-gray-5 rounded-[0.25rem]"
                                        {...field}
                                        onChange={(e) => field.onChange(Number(e.target.value))}
                                      />
                                    )}
                                  />
                                  <span>월 마다</span>
                                </div>
                                {renderRepeatDetailOptions()}
                              </div>
                            )}
                          </div>
                          <div>
                            <Radio value="year">연 단위 반복</Radio>
                            {field.value === 'year' && (
                              <div key="repeat-year" className="mt-2 flex flex-col gap-4 pl-6">
                                <div className="flex items-center gap-2">
                                  <Controller
                                    control={methods.control}
                                    name="interval"
                                    defaultValue={1}
                                    render={({ field }) => (
                                      <Input
                                        className="w-12 px-4 py-2.5 text-center bg-gray-5 rounded-[0.25rem]"
                                        {...field}
                                        onChange={(e) => field.onChange(Number(e.target.value))}
                                      />
                                    )}
                                  />
                                  <span>년 마다</span>
                                </div>
                                {renderRepeatDetailOptions()}
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
          </FormField>
          <FormField name="visible">
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
          <FormField name="content">
            <div className="flex flex-col py-4 gap-2">
              <Text typography={'b2-heading'}>일정 내용</Text>
              <Textarea className="h-[7.5rem] px-4 py-2.5" placeholder="내용을 적어주세요." />
            </div>
          </FormField>
        </div>
      </Form>
    </div>
  )
}
