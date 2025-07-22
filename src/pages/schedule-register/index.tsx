import { IconArrowLeft } from '@/shared/assets/icons'
import { GNB } from '@/shared/ui/gnb'
import Text from '@/shared/ui/text/text'
export default function ScheduleRegister() {
  //   const badgeVariants = cva('w-1 h-3 text-black rounded-sm z-50', {
  //     variants: {
  //       color: {
  //         redAlt: 'bg-calendar-red-alt',
  //         yellowAlt: 'bg-calendar-yellow-alt',
  //         greenAlt: 'bg-calendar-green-alt',
  //         blueAlt: 'bg-calendar-blue-alt',
  //         purpleAlt: 'bg-calendar-purple-alt',
  //       },
  //     },
  //   })
  return (
    <div>
      <GNB />
      <div className="flex justify-between items-center px-[1.25rem] py-[0.625rem]">
        <IconArrowLeft />
        <Text typography={'h2-heading'}>일정 등록</Text>
        <Text as="button">저장</Text>
      </div>
      <div className="flex flex-col px-4">
        <div className="flex flex-col py-4 gap-2 border-b border-gray-10">
          <Text typography={'b2-heading'}>일정 제목</Text>
          <input className="bg-gray-20" placeholder="일정 제목을 적어주세요" />
        </div>
        <div className="flex py-4 justify-between items-center border-b border-gray-10">
          <Text typography={'b2-heading'}>색 설정</Text>
          <div className="rounded-full w-[1.75rem] h-[1.75rem] bg-primary-50" />
        </div>
        <div className="flex flex-col py-4 gap-4 border-b border-gray-10">
          <div className="flex justify-between items-center">
            <Text typography={'b2-heading'}>시작</Text>
            <div>날짜</div>
          </div>
          <div className="flex justify-between items-center">
            <Text typography={'b2-heading'}>종료</Text>
            <div>날짜</div>
          </div>
        </div>
        <div className="flex py-4 justify-between items-center border-b border-gray-10">
          <Text typography={'b2-heading'}>하루 종일</Text>
          <div>토글 버튼</div>
        </div>
        <div className="flex py-4 justify-between items-center border-b border-gray-10">
          <Text typography={'b2-heading'}>반복</Text>
          <Text typography={'b2-normal'}>반복 안함</Text>
        </div>
        <div className="flex py-4 justify-between items-center border-b border-gray-10">
          <Text typography={'b2-heading'}>공개</Text>
          <Text typography={'b2-normal'}>나만 보기</Text>
        </div>
        <div className="flex flex-col py-4 gap-2 border-b border-gray-10">
          <Text typography={'b2-heading'}>일정 내용</Text>
          <input placeholder="내용을 적어주세요." />
        </div>
      </div>
    </div>
  )
}
