import { IconLogo } from '@/shared/assets/icons'
/**
 * 라우터 설정 후 a -> Link로 변경
 * @returns
 */

export default function Logo() {
  return (
    <a href={'/'}>
      <IconLogo className="w-16" />
    </a>
  )
}
