import { useState, type ReactNode } from 'react'

/**
 * @description 글로벌네비게이션바 입니다
 *
 * <GNB>
 * <Logo/>
 * {isLogged? <Hamburger/> : <LoginButton/>}
 * {isMenuOpen && <Menu />}
 * </GNB>
 */

// interface Props {
//   children: ReactNode
//   isLogged: boolean // 외부에서 전달받는 isLogged prop
//   defaultIsLogged: boolean // isLogged prop이 없을 때의 기본값
//   onLoggedChange: () => void // isLogged 상태 변경 시 호출될 콜백
// }
// export default function GNB({ children,isLogged: isLoggedProp, defaultIsLogged = false, onLoggedChange }: Props) {
//   const [isLogged, setIsLogged] = useControllableState({
//     prop: isLoggedProp,
//     defaultProp: defaultIsLogged,
//     onChange: onLoggedChange,
//   }) //추후에 로그인 기능 완성되면 외부 context에서 받아와서 처리

interface Prop {
  children: ReactNode
}

export default function GNB({ children }: Prop) {
  return <header className="fixed top-0 z-50 flex bg-white p-4 w-full items-center justify-between">{children}</header>
}
