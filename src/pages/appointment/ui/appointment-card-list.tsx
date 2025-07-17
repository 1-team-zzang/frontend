import AppointmentCard from './appointment-card'

const MockData = [
  {
    id: 1,
    name: '김지혜',
    submitDate: '2025.07.12',
    title: '2025 멍뭉이들이랑 여름휴가 🏖️',
    startDate: '2025.08.15',
    endDate: '2025.08.17',
  },
  {
    id: 2,
    name: '이승빈',
    submitDate: '2025.07.11',
    title: '정기 원온원',
    startDate: '2025.07.15 화 10:00',
    endDate: '2025.07.15 화 11:00',
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
