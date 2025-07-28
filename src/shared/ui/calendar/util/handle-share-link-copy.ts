import { devLog } from '@/shared/utils/dev-log'

export default function handleShareLinkCopy(link: string) {
  return async () => {
    try {
      await navigator.clipboard.writeText(link)
      alert('링크가 복사되었습니다.')
    } catch (err) {
      devLog('error', '복사실패', err)
    }
  }
}
