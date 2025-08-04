import introJs from 'intro.js'
import { useEffect } from 'react'
import 'intro.js/introjs.css'

function useIntroGuide() {
  useEffect(() => {
    const isMainVisited = localStorage.getItem('main-visited')
    if (isMainVisited) {
      return
    }
    const intro = introJs()

    intro.setOptions({
      steps: [
        {
          intro: '캘픽에서는 일정을 등록하고<br/>친구들과 약속을 만들 수 있어요!',
        },
        {
          element: '#share-button',
          intro: '내 캘린더 링크를 복사해서<br/>친구들에게 공유할 수 있어요!',
        },
        {
          element: '#open-sidebar',
          intro: '메뉴 버튼을 눌러 메뉴를 열어보세요!',
          disableInteraction: false,
          tooltipClass: 'wait-for-click',
        },
      ],
      showProgress: true,
      showBullets: false,
    })

    intro.start()

    localStorage.setItem('main-visited', 'true')

    const handleClick = () => {
      const isOnClickStep = document.querySelector('.introjs-tooltip.wait-for-click')
      setTimeout(() => {
        if (isOnClickStep) {
          intro.nextStep()
        }
      }, 300)
    }

    const sidebarButton = document.getElementById('open-sidebar')
    sidebarButton?.addEventListener('click', handleClick)

    return () => {
      sidebarButton?.removeEventListener('click', handleClick)
      if (intro) {
        intro.exit()
      }
    }
  }, [])
}

export default useIntroGuide
