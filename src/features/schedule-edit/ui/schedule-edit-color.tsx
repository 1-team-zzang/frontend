import { useState } from 'react'
import { useFormContext } from 'react-hook-form'

import ScheduleEditColorModal from '@/features/schedule-edit/ui/schedule-edit-color-modal'
import { Text } from '@/shared/ui'

import { formatColor } from '../model/format-color-map'

import type { ColorType } from '@/entities/schedule'

export default function ScheduleEditColor() {
  const { setValue } = useFormContext()
  const [isColorOpen, setIsColorOpen] = useState(false)
  const [selectedColor, setSelectedColor] = useState<ColorType>('RED')

  const colorMap = formatColor()

  const setColor = (color: ColorType) => {
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
