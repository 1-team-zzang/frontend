import Logo from '../../assets/icons/logo.svg?react'
import Hamburger from '../../assets/icons/hamburger.svg?react'
import Text from '../text/text'
import { useState } from 'react'
import Menu from './menu'

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

export default function GNB() {
  const [isLogged, setIsLogged] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  //현재는 임시로 이렇게 구현해 두었고 추후에는 로그인여부 상태값을 받아와서 처리하는 방식으로
  //수정하면 될거같습니다
  const handleLoginClick = () => {
    alert('로그인버튼 클릭됨')
    setIsLogged(true)
  }

  //햄버거메뉴 토글 함수
  //이것도 디자인 완성 후 수정하면 될거같습니다 !
  const handleHamburgerClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="flex bg-white p-4 w-full items-center justify-between">
      <Logo className="w-16" />
      {isLogged ? (
        <button aria-label="메뉴 열기/닫기" onClick={handleHamburgerClick} className="w-10">
          <Hamburger />
        </button>
      ) : (
        <Text as="button" typography={'b2-normal'} className="text-gray-20" onClick={handleLoginClick}>
          로그인
        </Text>
      )}

      {isMobileMenuOpen && <Menu />}
    </header>
  )
}
