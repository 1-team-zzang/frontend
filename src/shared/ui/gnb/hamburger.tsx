import HamburgerIcon from '@/assets/icons/hamburger.svg?react'

type Props = {
  onClick: () => void
}

export default function Hamburger({ onClick }: Props) {
  return (
    <button aria-label="메뉴 열기/닫기" onClick={onClick} className="w-10">
      <HamburgerIcon />
    </button>
  )
}
