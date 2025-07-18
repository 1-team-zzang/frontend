import AppointmentCard from './appointment-card'

const MockData = [
  {
    id: 1,
    name: '김지혜',
    title: '2025 멍뭉이들이랑 여름휴가 🏖️',
    createdAt: '2025.07.12',
    startAt: '2025.08.15',
    endAt: '2025.08.17',
  },
  {
    id: 2,
    name: '이승빈',
    title: '정기 원온원',
    createdAt: '2025.07.11',
    startAt: '2025.07.15 화 10:00',
    endAt: '2025.07.15 화 11:00',
  },
]

export default function AppointmentCardList() {
  return (
    <div>
      {MockData.map((item) => (
        <AppointmentCard key={item.id} {...item} />
      ))}
    </div>
  )
}
