import { devLog } from '@/shared/utils/dev-log'

export default function handleShareLinkCopy(link: string, setCopied: (value: boolean) => void) {
  return async () => {
    try {
      await navigator.clipboard.writeText(link)
      setCopied(true)
      alert('링크가 복사되었습니다.')
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      devLog('error', '복사실패', err)
    }
  }
}
