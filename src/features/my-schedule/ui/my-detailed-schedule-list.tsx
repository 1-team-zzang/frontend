import { useState } from 'react'
import { useNavigate, useParams } from 'react-router'

import { formatScheduleTime } from '@/entities/utils/format-schedule-time'
import { IconCalendarAdd } from '@/shared/assets/icons'
import { FloatButton } from '@/shared/ui'
import { DetailedScheduleListCard } from '@/shared/ui/detailed-schedule'

import { useDateSchedules } from '../hooks'

import DeleteConfirmModal from './delete-confirm-modal'
import EditSchduleDropDown from './edit-schedule-dropdown'

export default function MyDetailedScheduleList() {
  const navigate = useNavigate()
  const { date } = useParams() // ex: '2025-08-01'

  const { scheduleMap } = useDateSchedules({ start: date!, end: date! })

  const list = date ? (scheduleMap[date] ?? []) : []

  const onClick = (scheduleId: number) => {
    navigate(`/my/detailed-schedule/date/${date}/schedules/${scheduleId}`)
  }

  const [selectedScheduleId, setSelectedScheduleId] = useState<number | null>(null)

  const [isModalOpen, setIsModalOpen] = useState(false)

  const onDeleteClick = (scheduleId: number) => {
    setSelectedScheduleId(scheduleId)
    setIsModalOpen(true)
  }

  const onEditClick = (scheduleId: number) => {
    navigate(`/my/edit/schedules/${scheduleId}`)
  }

  const goToCreateSchedule = () => {
    navigate(`/my/detailed-schedule/create?date=${date}`)
  }

  return (
    <div>
      {list.length === 0 ? (
        <div className="text-center">아직 일정이 없어요</div>
      ) : (
        <div className="flex flex-col gap-4">
          {list.map((card) => {
            return (
              <DetailedScheduleListCard
                onCardClick={() => onClick(card.scheduleId)}
                key={`${card.scheduleId}-${card.startAt}`}
                title={card.title}
                time={formatScheduleTime(card)}
                badgeColor={card.color}
              >
                {card.appointmentId ? null : (
                  <EditSchduleDropDown
                    onDeleteClick={() => onDeleteClick(card.scheduleId)}
                    onEditClick={() => onEditClick(card.scheduleId)}
                  />
                )}
              </DetailedScheduleListCard>
            )
          })}

          {isModalOpen && (
            <DeleteConfirmModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} scheduleId={selectedScheduleId} />
          )}
        </div>
      )}
      <FloatButton className="bg-primary-60" size="large" onClick={goToCreateSchedule}>
        <IconCalendarAdd className="size-8" />
      </FloatButton>
    </div>
  )
}
