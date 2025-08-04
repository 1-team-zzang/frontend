import { useFormContext } from 'react-hook-form'

import { Switch, SwitchTrigger } from '../../../shared/ui/switch'
import Text from '../../../shared/ui/text/text'

export default function ScheduleEditAllDay() {
  const { watch, setValue } = useFormContext()
  const isAllDay = watch('isAllDay')

  return (
    <div className="flex py-4 justify-between items-center border-b border-gray-10">
      <Text typography={'b2-heading'}>하루 종일</Text>
      <Switch checked={isAllDay} onCheckedChange={(value) => setValue('isAllDay', value)}>
        <SwitchTrigger />
      </Switch>
    </div>
  )
}
