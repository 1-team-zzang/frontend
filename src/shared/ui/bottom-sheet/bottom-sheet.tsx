import { type ReactNode } from 'react'

import { useControllableState } from '@/shared/hooks'

import { BottomSheetProvider } from './bottom-sheet-context'

interface Props {
  children: ReactNode
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (isOpen: boolean) => void
}

/**
 * 바텀 시트의 상태를 관리하는 컨텍스트 프로바이더 컴포넌트
 *
 * @example
 * ```tsx
 * <BottomSheet open={isOpen} onOpenChange={setIsOpen}>
 *   <BottomSheetContainer>
 *     <BottomSheetContent>
 *       바텀 시트 내용
 *     </BottomSheetContent>
 *   </BottomSheetContainer>
 * </BottomSheet>
 * ```
 */
export default function BottomSheet({ children, open, defaultOpen, onOpenChange }: Props) {
  const [isOpen, setIsOpen] = useControllableState({
    prop: open,
    defaultProp: defaultOpen ?? true,
    onChange: onOpenChange,
  })

  return <BottomSheetProvider value={{ isOpen, setIsOpen }}>{children}</BottomSheetProvider>
}
