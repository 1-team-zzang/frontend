import { useEffect, useState } from 'react'

import { Modal, ModalContent, ModalOverlay, ModalPortal } from '@/shared/ui/modal'
import Text from '@/shared/ui/text/text'

import ScheduleEditTimeSelector from './schedule-edit-time-selector'

interface ScheduleTimePickerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  initialDate: Date
  onConfirm: (date: Date) => void
}

export default function ScheduleEditTimePicker({
  open,
  onOpenChange,
  initialDate,
  onConfirm,
}: ScheduleTimePickerProps) {
  // initialDate에서 시/분/오전·오후 초기값 세팅
  const initialHour = initialDate.getHours()
  const initialMinute = initialDate.getMinutes()
  const [hour, setHour] = useState(initialHour % 12 === 0 ? 12 : initialHour % 12)
  const [minute, setMinute] = useState(initialMinute)
  const [ampm, setAmPm] = useState<'AM' | 'PM'>(initialHour >= 12 ? 'PM' : 'AM')

  // 모달이 열릴 때마다 선택된 시간 초기화
  useEffect(() => {
    if (open) {
      const h = initialDate.getHours()
      setHour(h % 12 === 0 ? 12 : h % 12)
      setMinute(initialDate.getMinutes())
      setAmPm(h >= 12 ? 'PM' : 'AM')
    }
  }, [initialDate, open])

  // 시간 리스트 (1~12), 분 리스트 (0~59)
  const hours = Array.from({ length: 12 }, (_, i) => i + 1)
  const minutes = Array.from({ length: 60 }, (_, i) => i)

  // 확인 버튼 클릭 시 Date 객체 생성 후 반환
  const handleConfirm = () => {
    let selectedHour = hour
    if (ampm === 'AM' && hour === 12) {
      selectedHour = 0
    }
    if (ampm === 'PM' && hour !== 12) {
      selectedHour = hour + 12
    }

    const newDate = new Date(initialDate)
    newDate.setHours(selectedHour)
    newDate.setMinutes(minute)
    onConfirm(newDate)
    onOpenChange(false)
  }

  // 취소 버튼 클릭 시 초기값으로 되돌리고 모달 닫기
  const handleCancel = () => {
    setHour(initialHour % 12 === 0 ? 12 : initialHour % 12)
    setMinute(initialMinute)
    setAmPm(initialHour >= 12 ? 'PM' : 'AM')
    onOpenChange(false)
  }

  return (
    <Modal open={open} onOpenChange={onOpenChange} defaultOpen={false}>
      <ModalPortal>
        <ModalOverlay />
        <ModalContent className="flex w-[17.5rem] flex-col rounded-2xl py-6 px-3 gap-4">
          <div className="flex justify-between">
            <ScheduleEditTimeSelector
              className="flex-1 border-r border-gray-20 pr-5"
              values={hours}
              selected={hour}
              onSelect={setHour}
              formatter={(h) => h.toString().padStart(2, '0')}
            />

            <ScheduleEditTimeSelector
              className="flex-1 border-r border-gray-20 px-5"
              values={minutes}
              selected={minute}
              onSelect={setMinute}
              formatter={(m) => m.toString().padStart(2, '0')}
            />

            <ScheduleEditTimeSelector
              className="flex-1 pl-5"
              values={['AM', 'PM']}
              selected={ampm}
              onSelect={(v) => setAmPm(v as 'AM' | 'PM')}
              formatter={(v) => (v === 'AM' ? '오전' : '오후')}
            />
          </div>
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
