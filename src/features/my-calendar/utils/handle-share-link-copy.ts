import { toast } from '@/shared/ui/toast'
import { devLog } from '@/shared/utils/dev-log'

interface Props {
  link: string
  setIsOpen: (isOpen: boolean) => void
}

export default function handleShareLinkCopy({ link, setIsOpen }: Props) {
  return async () => {
    try {
      await navigator.clipboard.writeText(link)
      setIsOpen(true)
      toast.success('클립보드에 복사되었습니다 :P')
    } catch (err) {
      devLog('log', '복사에러', err)
      toast.error('처리할 수 없습니다')
    }
  }
}
