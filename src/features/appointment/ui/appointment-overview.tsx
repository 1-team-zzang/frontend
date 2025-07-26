import Text from '@/shared/ui/text/text'

import type { AppointmentDetail } from '@/entities/appointment/models'

export default function AppointmentOverview({ content }: Pick<AppointmentDetail, 'content'>) {
  return (
    <>
      <div className="border-b border-[#D9D9D9]" />
      <div className="pt-5 flex flex-col gap-3">
        {/* Image */}
        <div className="w-full h-[200px] bg-gray-5 rounded-[0.625rem]" />
        {/* Content */}
        <Text typography="b2-normal">{content}</Text>
      </div>
    </>
  )
}
