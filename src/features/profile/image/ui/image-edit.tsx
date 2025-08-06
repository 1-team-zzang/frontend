import { useState } from 'react'

import { IconClose, IconPencil } from '@/shared/assets'
import { Profile, ProfileImage } from '@/shared/ui'

import ImageEditBottomSheet from './image-edit-bottom-sheet'

export default function ImageEdit({
  imageUrl,
  onChange,
}: {
  imageUrl: string | null
  onChange: (newUrl: string | null) => void
}) {
  const [preview, setPreview] = useState<string | null>(imageUrl)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleSelect = (src: string | null) => {
    setPreview(src)
    onChange(src)
  }
  return (
    <>
      <div className="relative w-fit h-[5.5rem]">
        <button type="button" onClick={() => setIsOpen((prev) => !prev)} className="relative w-fit">
          <Profile src={preview}>
            <ProfileImage size="lg" />
          </Profile>
          <div className="absolute bottom-0 right-0 border-2 border-white rounded-full flex items-center justify-center size-6 bg-gray-10">
            <IconPencil />
          </div>
        </button>
        {preview && (
          <button
            type="button"
            onClick={() => handleSelect(null)}
            className="absolute top-0 left-0 text-gray-60 rounded-full size-6 bg-gray-10 border-2 border-white flex items-center justify-center"
          >
            <IconClose className="fill-white" />
          </button>
        )}
      </div>
      <ImageEditBottomSheet isOpen={isOpen} onOpenChange={setIsOpen} onImageChange={handleSelect} />
    </>
  )
}
