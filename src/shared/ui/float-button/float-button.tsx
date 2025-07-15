import { cva, type VariantProps } from 'class-variance-authority'

import { cn, Slot } from '@/shared/utils'

import type { ButtonHTMLAttributes } from 'react'

const FloatButtonVariants = cva('', {
  variants: {
    shape: {
      circle: 'rounded-full',
      square: 'rounded-lg',
    },
    size: {
      small: 'size-8',
      medium: 'size-12',
      large: 'size-16',
    },
  },
  defaultVariants: {
    shape: 'circle',
    size: 'medium',
  },
})

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof FloatButtonVariants> {
  asChild?: boolean
}

/**
 * 플로팅 버튼 컴포넌트
 *
 * 고정 위치에 표시되는 버튼으로, `shape`와 `size`를 조절할 수 있습니다.
 * `asChild` 옵션을 통해 버튼 대신 다른 요소로 렌더링할 수 있습니다.
 *
 * @param {Object} props - 컴포넌트 props
 * @param {'circle' | 'square'} [props.shape='circle'] - 버튼 모양 (circle or square)
 * @param {'small' | 'medium' | 'large'} [props.size='medium'] - 버튼 크기 (small | medium | large)
 * @param {boolean} [props.asChild] - true면 자식 컴포넌트로 렌더링
 * @param {React.ReactNode} props.children - 버튼 내부 내용
 * @param {string} [props.className] - 추가 CSS 클래스
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} restProps - 기타 버튼 속성들
 *
 * @returns {JSX.Element} 플로팅 버튼 컴포넌트
 *
 * @example
 * <FloatButton shape="square" size="large">
 *   Click
 * </FloatButton>
 */
export default function FloatButton({ shape, size, children, asChild, className, ...restProps }: Props) {
  const Element = asChild ? Slot : 'button'

  return (
    <Element
      type="button"
      className={cn(
        'bg-gray-20 flex items-center justify-center shadow-md fixed bottom-5 right-4',
        FloatButtonVariants({ shape, size }),
        className,
      )}
      {...restProps}
    >
      {children}
    </Element>
  )
}
