import { IconCalendarAdd } from '@/shared/assets/icons'
import FloatButton from '@/shared/ui/float-button/float-button'

export default function AddScheduleButton() {
  return (
    <FloatButton shape="circle" size="large" className="bg-primary-60">
      <IconCalendarAdd />
    </FloatButton>
  )
}
