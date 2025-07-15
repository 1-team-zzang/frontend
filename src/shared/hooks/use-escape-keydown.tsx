import { useEffect } from 'react'

interface Params {
  onEscapeKeyDown: (event: KeyboardEvent) => void
}

export default function useEscapeKeydown({ onEscapeKeyDown }: Params) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onEscapeKeyDown(event)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onEscapeKeyDown])
}
