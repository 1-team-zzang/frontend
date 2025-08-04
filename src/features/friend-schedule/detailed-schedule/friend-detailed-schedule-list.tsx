import { useState } from 'react'
import { useNavigate, useParams } from 'react-router'

import { formatScheduleTime } from '@/entities/utils/format-schedule-time'
import { IconInvite } from '@/shared/assets/icons'
import { AddScheduleButton, PrivateScheduleModal } from '@/shared/ui'
import { DetailedScheduleListCard } from '@/shared/ui/detailed-schedule'

import { useFriendSchedule } from '../hooks/useFriendSchedule'

export default function FriendDetailedScheduleList() {
  const navigate = useNavigate()
  const { date, friendId } = useParams() // ex: '2025-08-01'
  const { scheduleMap } = useFriendSchedule()
  const list = date ? (scheduleMap[date] ?? []) : []
  const [isModalOpen, setIsModalOpen] = useState(false)

  const onClick = (scheduleId: number) => {
    navigate(`/friends/${friendId}/calendar/detailed-schedule/date/${date}/schedules/${scheduleId}`)
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
      <AddScheduleButton>
        <IconInvite />
      </AddScheduleButton>
      {isModalOpen && <PrivateScheduleModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />}
    </div>
  )
}
