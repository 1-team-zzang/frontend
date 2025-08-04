import { motion } from 'framer-motion'
import { useEffect, useRef, type ReactNode } from 'react'

import { useClickOutside, useSidebarIntroGuide } from '@/shared/hooks'

import { useGNBContext } from '../gnb/gnb-conext'

/**
 * @description 햄버거 버튼 클릭시 나타나는 사이드바 입니다
 */

const sidebarVariants = {
  closed: { x: '100%', boxShadow: 'none' },
  open: { x: 0, boxShadow: '-2px 0 16px rgba(0, 0, 0, 0.05)' },
}

interface Props {
  children: ReactNode
}

export default function SideBar({ children }: Props) {
  const { isOpen, handleCloseSidebar } = useGNBContext()

  useSidebarIntroGuide(isOpen)

  const sidebarRef = useRef<HTMLElement>(null)

  useClickOutside(sidebarRef, handleCloseSidebar)

  useEffect(() => {
    return () => {
      handleCloseSidebar()
    }
  }, [])

  return (
    <motion.nav
      ref={sidebarRef}
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
      exit="closed"
      variants={sidebarVariants}
      transition={{ type: 'tween', duration: 0.3 }}
      className="w-[16rem] h-full absolute top-0 right-0 flex flex-col justify-between bg-white p-[0.625rem] z-side-bar rounded-s-lg"
    >
      {children}
    </motion.nav>
  )
}
