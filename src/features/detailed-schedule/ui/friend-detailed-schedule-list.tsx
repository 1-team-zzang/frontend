import { useState } from 'react'
import { useNavigate, useParams } from 'react-router'

import { PrivateScheduleModal } from '@/entities/calendar/ui'
import { DetailedScheduleListCard, NonSchedule } from '@/entities/detailed-schedule/ui'
import { useFriendMonths, useFriendSchedulesByuserId } from '@/entities/schedule/model'
import { formatScheduleTime } from '@/entities/utils'
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
        <NonSchedule />
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
