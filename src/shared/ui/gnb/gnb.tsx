import { AnimatePresence } from 'framer-motion'
import { useState, type ReactNode } from 'react'

import { GNBProvider } from './gnb-conext'
import Logo from './logo'

/**
 * @description 글로벌네비게이션바 입니다
 *
 * <GNB>
 * <Logo/>
 * {isLogged? <Hamburger/> : <LoginButton/>}
 * {isMenuOpen && <Menu />} //사이드바 애니메이션 추가
 * </GNB>
 */

// interface Props {
//   isLogged: boolean // 외부에서 전달받는 isLogged prop
//   defaultIsLogged: boolean // isLogged prop이 없을 때의 기본값
//   onLoggedChange: () => void // isLogged 상태 변경 시 호출될 콜백
// }
// export default function GNB({ isLogged: isLoggedProp, defaultIsLogged = false, onLoggedChange }: Props) {
//   const [isLogged, setIsLogged] = useControllableState({
//     prop: isLoggedProp,
//     defaultProp: defaultIsLogged,
//     onChange: onLoggedChange,
//   }) //추후에 로그인 기능 완성되면 외부 context에서 받아와서 처리

interface Props {
  rightSlot: ReactNode
  sidebar: ReactNode
}

export default function GNB({ rightSlot, sidebar }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpenSidebar = () => setIsOpen(true)
  const handleCloseSidebar = () => setIsOpen(false)
  const handleToggleSidebar = () => setIsOpen((prev) => !prev)

  const providerValue = {
    isOpen,
    handleOpenSidebar,
    handleCloseSidebar,
    handleToggleSidebar,
  }

  return (
    <GNBProvider value={providerValue}>
      <header className="z-fixed flex min-h-14 bg-white py-2 border-b-gray-5 border-b px-4 w-full items-center justify-between">
        <Logo />
        {rightSlot}
      </header>

      <AnimatePresence>{sidebar}</AnimatePresence>
    </GNBProvider>
  )
}
