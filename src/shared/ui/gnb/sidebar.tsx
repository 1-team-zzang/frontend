import { motion } from 'framer-motion'

import { useGNBContext } from './gnb-conext'
import SideBarMenu from './sidebar-menu'
import SideBarMenuFooter from './sidebar-menu-footer'
import SideBarMenuHeader from './sidebar-menu-header'

/**
 * @description 햄버거 버튼 클릭시 나타나는 사이드바 입니다
 */

const sidebarVariants = {
  closed: { x: '100%' },
  open: { x: 0 },
}

export default function SideBar() {
  const { isOpen } = useGNBContext()
  return (
    <motion.nav
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
      exit="closed"
      variants={sidebarVariants}
      transition={{ type: 'tween', duration: 0.3 }}
      className="w-[16rem] h-full fixed top-0 right-0 flex flex-col justify-between bg-white p-[0.625rem] z-side-bar rounded-s-lg"
    >
      <div>
        <SideBarMenuHeader username="이름" />
        <SideBarMenu />
      </div>
      <SideBarMenuFooter />
    </motion.nav>
  )
}
