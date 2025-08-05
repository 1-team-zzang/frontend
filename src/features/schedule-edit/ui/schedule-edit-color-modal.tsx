import { type SetStateAction, type Dispatch } from 'react'

import { ModalContent, ModalOverlay, Modal, ModalPortal } from '@/shared/ui/modal'

import { formatColor } from '../model/format-color-map'

interface Props {
  isColorOpen: boolean
  setIsColorOpen: Dispatch<SetStateAction<boolean>>
  selectedColor: string
  setSelectedColor: Dispatch<SetStateAction<Color>>
  setColor: (color: Color) => void
}

const colorOptions = ['RED', 'YELLOW', 'GREEN', 'BLUE', 'PURPLE'] as const
type Color = (typeof colorOptions)[number]

const colorMap = formatColor()

export default function ScheduleEditColorModal({
  isColorOpen,
  setIsColorOpen,
  selectedColor,
  setSelectedColor,
  setColor,
}: Props) {
  return (
    <Modal open={isColorOpen} defaultOpen={false} onOpenChange={setIsColorOpen}>
      <ModalPortal>
        <ModalOverlay />
        <ModalContent className="h-fit p-6">
          <div className="grid grid-cols-3 gap-6">
            {colorOptions.map((color) => (
              <div
                key={color}
                className={`w-fit h-fit rounded-xl p-4 transition-colors ${selectedColor === color ? 'bg-gray-5' : ''}`}
              >
                <button
                  onClick={() => {
                    setSelectedColor(color)
                    setIsColorOpen(false)
                    setColor(color)
                  }}
                  className={`rounded-full w-12 h-12 ${colorMap[color]}`}
                />
              </div>
            ))}
          </div>
        </ModalContent>
      </ModalPortal>
    </Modal>
  )
}
