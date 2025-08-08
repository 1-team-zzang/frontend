import { useNavigate } from 'react-router'

import { IconAppointmentArrowLeft } from '@/shared/assets'
import { Text, Tooltip, TooltipMessage, TooltipTrigger } from '@/shared/ui'
import { cn } from '@/shared/utils'

import type { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  href: string
  isKaKaoLogin?: boolean
  message?: string
}

function SettingListItem({ children, href, isKaKaoLogin, message }: Props) {
  const navigate = useNavigate()

  return (
    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-10">
      <Text as="span" typography="b2-normal" className={cn(isKaKaoLogin && 'text-gray-40')}>
        {children}
      </Text>
      {isKaKaoLogin ? (
        <Tooltip>
          <TooltipTrigger className="cursor-not-allowed">
            <IconAppointmentArrowLeft className="rotate-180" />
          </TooltipTrigger>
          <TooltipMessage position="top" arrowPosition="bottom">
            {message}
          </TooltipMessage>
        </Tooltip>
      ) : (
        <button onClick={() => navigate(href)}>
          <IconAppointmentArrowLeft className="rotate-180" />
        </button>
      )}
    </div>
  )
}

export default SettingListItem
