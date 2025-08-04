import { useCallback, useEffect, type RefObject } from 'react'

export default function useClickOutside(ref: RefObject<HTMLElement | null>, onClose: () => void) {
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      const isIntroOpen = document.querySelector('.introjs-overlay') !== null

      if (isIntroOpen) {
        return
      }

      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose()
      }
    },
    [ref, onClose],
  )

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handleClickOutside])
}
