import { useState } from 'react'
import { useNavigate, useParams } from 'react-router'

import { DetailedScheduleListCard } from '@/entities/detailed-schedule/ui'
import { useFriendSchedulesByuserId } from '@/entities/schedule/hooks'
import { useFriendMonths } from '@/entities/schedule/lib'
import { formatScheduleTime } from '@/entities/utils/format-schedule-time'
import { PrivateScheduleModal } from '@/features/calendar/ui'
import { IconInvite } from '@/shared/assets'
import { FloatButton } from '@/shared/ui'

export default function FriendDetailedScheduleList() {
  const navigate = useNavigate()
  const { date, friendId } = useParams() // ex: '2025-08-01'

  const { months } = useFriendMonths(friendId!)

  const { scheduleMap } = useFriendSchedulesByuserId({ months, friendId: friendId! })

  const list = date ? (scheduleMap[date] ?? []) : []

  const [isModalOpen, setIsModalOpen] = useState(false)

  const onClick = (scheduleId: number) => {
    navigate(`/friends/${friendId}/calendar/detailed-schedule/date/${date}/schedules/${scheduleId}`)
  }
  const goToCreateAppointment = () => {
    navigate(`/friends/${friendId}/calendar/appointment/create?date=${date}`)
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
                isVisible={card.isVisible}
              />
            )
          })}
        </div>
      )}
      {isModalOpen && <PrivateScheduleModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />}
      <FloatButton className="bg-primary-60" size="large" onClick={goToCreateAppointment}>
        <IconInvite className="size-8" />
      </FloatButton>
    </div>
  )
}
