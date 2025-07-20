import { IconHamburger } from '@/shared/assets/icons'

type Props = {
  onClick: () => void
}

export default function Hamburger({ onClick }: Props) {
  return (
    <button aria-label="메뉴 열기/닫기" onClick={onClick} className="w-10">
      <IconHamburger />
    </button>
  )
}
