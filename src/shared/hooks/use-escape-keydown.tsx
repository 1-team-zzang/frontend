import { useEffect, useRef } from 'react'

interface Params {
  onEscapeKeyDown: (event: KeyboardEvent) => void
}

export default function useEscapeKeydown({ onEscapeKeyDown }: Params) {
  const onEscapeKeyDownRef = useRef(onEscapeKeyDown)

  useEffect(() => {
    onEscapeKeyDownRef.current = onEscapeKeyDown
  }, [onEscapeKeyDown])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onEscapeKeyDownRef.current(event)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])
}
