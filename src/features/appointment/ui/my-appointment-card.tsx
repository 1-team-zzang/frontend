import { Link } from 'react-router'

import Text from '@/shared/ui/text/text'

export default function MyAppointmentCard() {
  return (
    <Link to="/appointment/1">
      <div className="w-full rounded-[0.625rem] border border-gray-20 overflow-hidden">
        <div className="flex justify-between items-center bg-gray-10 py-4 px-6">
          <div className="flex items-center gap-[0.313rem]">
            <Text typography="b2-heading">From</Text>
            <Text typography="b2-normal">김지혜</Text>
          </div>
          <Text typography="b2-normal" className="text-gray-60">
            2025. 07. 12
          </Text>
        </div>
        <div className="flex flex-col items-center gap-[0.188rem] py-6">
          <Text typography="b2-heading">2025 멍뭉이들이랑 여름휴가 🏖️</Text>
          <div className="flex items-center gap-[0.313rem]">
            <Text typography="b2-heading">시작</Text>
            <Text typography="b2-normal">2025.08.15 (금)</Text>
          </div>
          <div className="flex items-center gap-[0.313rem]">
            <Text typography="b2-heading">종료</Text>
            <Text typography="b2-normal">2025.08.17 (일)</Text>
          </div>
        </div>
      </div>
    </Link>
  )
}
