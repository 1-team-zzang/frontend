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
      setTimeout(() => setIsOpen(false), 2000)
    } catch (err) {
      devLog('error', '복사실패', err)
    }
  }
}
