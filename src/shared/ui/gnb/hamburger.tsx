import { IconHamburger } from '@/shared/assets/icons'

import { useGNBContext } from './gnb-conext'

export default function Hamburger() {
  const { handleOpenSidebar } = useGNBContext()

  return (
    <button aria-label="메뉴 열기/닫기" onClick={handleOpenSidebar} className="w-10">
      <IconHamburger />
    </button>
  )
}
