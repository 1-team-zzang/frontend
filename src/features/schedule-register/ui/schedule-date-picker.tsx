import { format } from 'date-fns'
import { ko } from 'date-fns/locale'
import { useState, useEffect, useMemo } from 'react'

import { IconCalendarArrowLeft, IconCalendarArrowRight } from '@/shared/assets/icons'
import { Modal, ModalContent, ModalOverlay, ModalPortal } from '@/shared/ui/modal'
import Text from '@/shared/ui/text/text'

import ScheduleMonthlyCalendar from './shedule-monthly-calendar'

interface ScheduleDatePickerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  initialDate?: Date
  onConfirm: (date: Date) => void
  today: Date
}

export default function ScheduleDatePicker({
  open,
  onOpenChange,
  initialDate,
  onConfirm,
  today,
}: ScheduleDatePickerProps) {
  const now = useMemo(() => initialDate ?? new Date(), [initialDate])

  // 현재 보고 있는 연/월 상태
  const [currentYear, setCurrentYear] = useState(now.getFullYear())
  const [currentMonth, setCurrentMonth] = useState(now.getMonth())

  // 선택된 날짜 상태
  const [selectedDate, setSelectedDate] = useState(now)

  // 모달이 열릴 때마다 선택된 날짜를 초기화
  useEffect(() => {
    if (open) {
      setSelectedDate(now)
      setCurrentYear(now.getFullYear())
      setCurrentMonth(now.getMonth())
    }
  }, [open, now])

  // 날짜 클릭 시 임시 상태만 변경
  const handleSelectDate = (date: Date) => {
    setSelectedDate(date)
  }

  const handleConfirm = () => {
    onConfirm(selectedDate)
    onOpenChange(false)
  }

  const handleCancel = () => {
    setSelectedDate(now)
    onOpenChange(false)
  }

  // 이전 달 / 다음 달 이동
  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentYear((y) => y - 1)
      setCurrentMonth(11)
    } else {
      setCurrentMonth((m) => m - 1)
    }
  }

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentYear((y) => y + 1)
      setCurrentMonth(0)
    } else {
      setCurrentMonth((m) => m + 1)
    }
  }

  return (
    <Modal open={open} onOpenChange={onOpenChange} defaultOpen={false}>
      <ModalPortal>
        <ModalOverlay />
        <ModalContent className="bg-white rounded-2xl p-4">
          {/* 헤더: 월 이동 */}
          <div className="flex justify-between items-center py-[0.3125rem]">
            <IconCalendarArrowLeft type="button" onClick={prevMonth} />
            <span className="text-sm font-medium">
              {format(new Date(currentYear, currentMonth), 'yyyy년 M월', { locale: ko })}
            </span>
            <IconCalendarArrowRight type="button" onClick={nextMonth} />
          </div>

          {/* 달력 */}
          <ScheduleMonthlyCalendar
            year={currentYear}
            month={currentMonth}
            onSelectDate={handleSelectDate}
            selectedDate={selectedDate}
            today={today}
          />
          <div className="flex justify-end items-end">
            <Text
              as="button"
              type="button"
              typography="b2-normal"
              className="text-gray-95 py-2 px-3"
              onClick={handleCancel}
            >
              취소
            </Text>
            <Text
              as="button"
              type="button"
              typography="b2-normal"
              className="text-primary-80 py-2 px-3"
              onClick={handleConfirm}
            >
              확인
            </Text>
          </div>
        </ModalContent>
      </ModalPortal>
    </Modal>
  )
}
