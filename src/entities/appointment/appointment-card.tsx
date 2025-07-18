interface Props {
  name: string
  submitDate: string
  title: string
  startDate: string
  endDate: string
}

export default function AppointmentCard({ name, submitDate, title, startDate, endDate }: Props) {
  return (
    <div className="flex flex-col m-5 bg-gray-1 border rounded-[0.625rem] border-gray-20">
      <div className="flex px-[1.5625rem] py-[0.875rem] justify-between items-center">
        <div className="flex gap-[0.3125rem]">
          <div className="font-semibold text-base">From</div>
          <div className="font-base text-base">{name}</div>
        </div>
        <div>
          <div className="font-base text-base">{submitDate.toLocaleString()}</div>
        </div>
      </div>
      <div className="flex flex-col bg-white border border-gray-20 rounded-[0.625rem]">
        <div className="flex flex-col mx-auto items-center py-[1.75rem]">
          <div className="font-semibold text-base">{title}</div>
          <div className="flex gap-[0.3125rem] justify-center">
            <div className="font-semibold text-base">시작</div>
            <div className="font-base text-base">{startDate.toLocaleString()}</div>
          </div>
          <div className="flex gap-[0.3125rem] justify-center">
            <div className="font-semibold text-base">종료</div>
            <div className="font-base text-base">{endDate.toLocaleString()}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
