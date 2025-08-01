import type { ReactNode } from 'react'

interface DropDownTriggerProps {
  children: ReactNode
  onClick: () => void
}

function DropDownTrigger({ children, onClick }: DropDownTriggerProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          onClick()
        }
      }}
    >
      {children}
    </button>
  )
}

export default DropDownTrigger
