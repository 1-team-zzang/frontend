import { Children, cloneElement, isValidElement, type HTMLAttributes, type ReactElement, type ReactNode } from 'react'

import { Slottable } from './Slottable'

interface Props extends HTMLAttributes<HTMLElement> {
  children: ReactNode
}

export function Slot({ children, ...restProps }: Props): ReactElement | null {
  const childrenArray = Children.toArray(children)
  const slottable = childrenArray.find((child) => isValidElement(child) && child.type === Slottable) as ReactElement<{
    children: ReactNode
  }>

  if (slottable) {
    const newElement = slottable.props.children

    if (!isValidElement(newElement)) {
      return null
    }

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

    return cloneElement(
      newElement as ReactElement<{ children: ReactNode }>,
      { ...restProps, ...('props' in newElement ? (newElement.props as { children?: ReactNode }) : {}) },
      newChildren,
    )
  }

  if (isValidElement(children)) {
    return cloneElement(children, { ...restProps, ...(children.props as { children: ReactNode }) })
  }

  console.error('Slot 컴포넌트는 하나의 React 엘리먼트만 자식으로 받을 수 있어요.')

  return null
}
