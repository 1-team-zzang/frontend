import { useState } from 'react'
import { useFormContext } from 'react-hook-form'

import ScheduleEditColorModal from '@/shared/ui/schedule-edit/schedule-edit-color-modal'

import Text from '../text/text'

export default function ScheduleEditColor() {
  const { setValue } = useFormContext()
  const [isColorOpen, setIsColorOpen] = useState(false)
  const [selectedColor, setSelectedColor] = useState<'red' | 'yellow' | 'green' | 'blue' | 'purple'>('red')

  const colorMap: Record<'red' | 'yellow' | 'green' | 'blue' | 'purple', string> = {
    red: 'bg-calendar-red',
    yellow: 'bg-calendar-yellow',
    green: 'bg-calendar-green',
    blue: 'bg-calendar-blue',
    purple: 'bg-calendar-purple',
  }

  const setColor = (color: 'red' | 'yellow' | 'green' | 'blue' | 'purple') => {
    setSelectedColor(color)
    setValue('color', color)
  }

  return (
    <>
      <div className="flex py-4 justify-between items-center border-b border-gray-10">
        <Text typography={'b2-heading'}>색 설정</Text>
        <button
          type="button"
          onClick={() => {
            setIsColorOpen(true)
          }}
          className={`rounded-full w-[1.75rem] h-[1.75rem] ${colorMap[selectedColor]}`}
        />
      </div>

      <ScheduleEditColorModal
        isColorOpen={isColorOpen}
        setIsColorOpen={setIsColorOpen}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        setColor={setColor}
      />
    </>
  )
}
