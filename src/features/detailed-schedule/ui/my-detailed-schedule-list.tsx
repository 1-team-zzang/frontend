import { useState } from 'react'
import { useNavigate, useParams } from 'react-router'

import { DetailedScheduleListCard, NonSchedule } from '@/entities/detailed-schedule/ui'
import { useMyMonthsStore, useMySchedulesByMonth } from '@/entities/schedule/hooks'
import { DeleteConfirmModal, EditScheduleDropDown } from '@/entities/schedule/ui'
import { formatScheduleTime } from '@/entities/utils/format-schedule-time'
import { IconCalendarAdd } from '@/shared/assets/icons'
import { FloatButton } from '@/shared/ui'

export default function MyDetailedScheduleList() {
  const navigate = useNavigate()
  const { date } = useParams() // ex: '2025-08-01'
  const months = useMyMonthsStore((s) => s.months)

  const { scheduleMap } = useMySchedulesByMonth(months)

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
        <NonSchedule />
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
                  <EditScheduleDropDown
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
