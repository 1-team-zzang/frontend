import { devLog } from '@/shared/utils/dev-log'

export default function handleShareLinkCopy(link: string, setCopied: (value: boolean) => void) {
  return async () => {
    try {
      await navigator.clipboard.writeText(link)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      devLog('error', '복사실패', err)
    }
  }
}
