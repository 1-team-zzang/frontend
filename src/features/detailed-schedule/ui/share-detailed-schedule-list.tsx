import { useState } from 'react'
import { useNavigate, useParams } from 'react-router'

import { PrivateScheduleModal } from '@/entities/calendar/ui'
import { DetailedScheduleListCard } from '@/entities/detailed-schedule/ui'
import { useShareScheduleByUserId } from '@/entities/schedule/model'
import { formatScheduleTime } from '@/entities/utils'
import { IconInvite } from '@/shared/assets'
import { FloatButton } from '@/shared/ui'

export default function ShareDetailedScheduleList() {
  const navigate = useNavigate()
  const { date, userId } = useParams() // ex: '2025-08-01'
  const { scheduleMap } = useShareScheduleByUserId()
  const list = date ? (scheduleMap[date] ?? []) : []
  const [isModalOpen, setIsModalOpen] = useState(false)

  const onClick = (scheduleId: number) => {
    navigate(`/share/${userId}/detailed-schedule/date/${date}/schedules/${scheduleId}`)
  }

  const goToCreateAppointment = () => {
    navigate(`/share/${userId}/appointment/create?date=${date}`)
  }

  return (
    <div>
      {list.length === 0 ? (
        <div className="text-center">아직 일정이 없어요</div>
      ) : (
        <div className="flex flex-col gap-4">
          {list.map((card) => {
            const handleClick = card.isVisible ? () => onClick(card.scheduleId) : () => setIsModalOpen(true)
            return (
              <DetailedScheduleListCard
                onCardClick={handleClick}
                key={`${card.scheduleId}-${card.startAt}`}
                title={card.title}
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
