import Text from '@/shared/ui/text/text.tsx'

interface Props {
  name: string
  title: string
  createdAt: string
  startAt: string
  endAt: string
}

export default function AppointmentCard({ name, createdAt, title, startAt, endAt }: Props) {
  return (
    <div className="flex flex-col m-5 bg-gray-1 border rounded-[0.625rem] border-gray-20">
      <div className="flex px-[1.5625rem] py-[0.875rem] justify-between items-center">
        <div className="flex gap-[0.3125rem]">
          <Text typography={'b2-heading'}>From</Text>
          <Text typography={'b2-normal'}>{name}</Text>
        </div>
        <div>
          <Text typography={'b2-normal'}>{createdAt.toLocaleString()}</Text>
        </div>
      </div>
      <div className="flex flex-col bg-white border border-gray-20 rounded-[0.625rem]">
        <div className="flex flex-col mx-auto items-center py-[1.75rem]">
          <Text typography={'b2-heading'}>{title}</Text>
          <div className="flex gap-[0.3125rem] justify-center">
            <Text typography={'b2-heading'}>시작</Text>
            <Text typography={'b2-normal'}>{startAt.toLocaleString()}</Text>
          </div>
          <div className="flex gap-[0.3125rem] justify-center">
            <Text typography={'b2-heading'}>종료</Text>
            <Text typography={'b2-normal'}>{endAt.toLocaleString()}</Text>
          </div>
        </div>
      </div>
    </div>
  )
}
