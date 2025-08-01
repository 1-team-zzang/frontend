import type { ButtonHTMLAttributes } from 'react'

interface DropDownTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void
}

function DropDownTrigger({ children, onClick, className, ...restProps }: DropDownTriggerProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          onClick()
        }
      }}
      {...restProps}
    >
      {children}
    </button>
  )
}

export default DropDownTrigger
