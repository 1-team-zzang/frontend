import { devLog } from '@/shared/utils/dev-log'

import { toast } from '../../toast/toast'

export default function handleShareLinkCopy(link: string) {
  return async () => {
    try {
      await navigator.clipboard.writeText(link)
      toast.success('클립보드에 복사되었습니다 :P')
    } catch (err) {
      toast.error('복사에 실패했어요')
      devLog('error', '복사실패', err)
    }
  }
}
