import { IconNonSchedule } from '@/shared/assets/icons'

export default function NonSchedule() {
  return (
    <div className="flex flex-col items-center justify-center mt-32">
      <IconNonSchedule aria-hidden="true" focusable="false" />
      <span>아직 일정이 없어요</span>
    </div>
  )
}
