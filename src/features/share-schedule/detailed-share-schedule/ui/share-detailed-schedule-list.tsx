import { useState } from 'react'
import { useNavigate, useParams } from 'react-router'

import { formatScheduleTime } from '@/entities/utils/format-schedule-time'
import { DetailedScheduleListCard, PrivateScheduleModal } from '@/shared/ui/calendar'

import { useShareSchedule } from '../../hooks/use-share-schedule'

export default function ShareDetailedScheduleList() {
  const navigate = useNavigate()
  const { date, userId } = useParams() // ex: '2025-08-01'
  const { scheduleMap } = useShareSchedule()
  const list = date ? (scheduleMap[date] ?? []) : []
  const [isModalOpen, setIsModalOpen] = useState(false)

  const onClick = (scheduleId: number) => {
    navigate(`/share/${userId}/detailed-schedule/date/${date}/schedule/${scheduleId}`)
  }

  return (
    <div>
      {list.length === 0 ? (
        <div className="text-center">아직 일정이 없어요</div>
      ) : (
        <div className="flex flex-col gap-4">
          {list.map((card) => {
            const title = card.isVisible ? card.title : '비공개일정'
            const handleClick = card.isVisible ? () => onClick(card.scheduleId) : () => setIsModalOpen(true)
            return (
              <DetailedScheduleListCard
                onCardClick={handleClick}
                key={`${card.scheduleId}-${card.startAt}`}
                title={title}
                time={formatScheduleTime(card)}
                badgeColor={card.color}
              />
            )
          })}
        </div>
      )}
      {isModalOpen && <PrivateScheduleModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />}
    </div>
  )
}
