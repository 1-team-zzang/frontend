import { useNavigate } from 'react-router'

import { IconAppointmentArrowLeft } from '@/shared/assets'
import { Text } from '@/shared/ui'

import type { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  href: string
}

function SettingListItem({ children, href }: Props) {
  const navigate = useNavigate()

  return (
    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-10">
      <Text as="span" typography="b2-normal">
        {children}
      </Text>
      <button onClick={() => navigate(href)}>
        <IconAppointmentArrowLeft className="rotate-180" />
      </button>
    </div>
  )
}

export default SettingListItem
