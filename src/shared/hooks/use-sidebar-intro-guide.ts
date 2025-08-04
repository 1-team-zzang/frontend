import introJs from 'intro.js'
import { useEffect } from 'react'
import 'intro.js/introjs.css'

function useSidebarIntroGuide(isOpen: boolean) {
  useEffect(() => {
    if (!isOpen) {
      return
    }

    const isSidebarVisited = localStorage.getItem('sidebar-visited')
    if (isSidebarVisited) {
      return
    }
    const intro = introJs()

    setTimeout(() => {
      intro
        .setOptions({
          steps: [
            {
              element: '#my-calendar',
              intro: "'내 캘린더' 페이지에서<br>내 일정을 확인하고<br/>일정을 등록할 수 있어요!",
            },
            {
              element: '#my-appointments',
              intro: "'내 약속' 페이지에서<br/>친구와 맺은 약속 및 <br/>신청한 약속을 확인할 수 있어요!",
            },
            {
              element: '#friends',
              intro: "'캘메이트' 페이지에서<br/>친구들의 일정을 확인하고<br/>약속을 신청할 수 있어요!",
            },
          ],
          showProgress: true,
          showBullets: false,
        })
        .start()
    }, 300)

    localStorage.setItem('sidebar-visited', 'true')
  }, [isOpen])
}

export default useSidebarIntroGuide
