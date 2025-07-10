import { Children, cloneElement, isValidElement, type ReactElement, type ReactNode } from 'react'

import { Slottable } from './Slottable'

export function Slot({ children, ...restProps }: { children: ReactNode }) {
  const childrenArray = Children.toArray(children)
  const slottable = childrenArray.find((child) => isValidElement(child) && child.type === Slottable) as ReactElement<{
    children: ReactNode
  }>

  if (slottable) {
    const newElement = slottable.props.children
    const newChildren = childrenArray.map((child) => {
      if (child === slottable) {
        if (Children.count(newElement) > 1) {
          Children.only(null)
          return
        }

        if (isValidElement(newElement)) {
          return (newElement.props as { children: ReactNode }).children
        }

        return null
      }

      return child
    })

    return isValidElement(newElement)
      ? cloneElement(newElement, { ...restProps, ...(newElement.props as { children: ReactNode }) }, newChildren)
      : null
  }
}
