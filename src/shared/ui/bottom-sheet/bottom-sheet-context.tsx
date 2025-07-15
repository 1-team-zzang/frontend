import { createContextScope } from '@/shared/utils'

const createBottomSheetContext = createContextScope()

interface BottomSheetContextValue {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

/**
 * 바텀 시트 컨텍스트
 *
 * 바텀 시트의 상태를 전역적으로 관리하기 위한 React Context입니다.
 *
 * @example
 * ```tsx
 * const { isOpen, setIsOpen } = useBottomSheetContext()
 *
 * const handleClose = () => {
 *   setIsOpen(false)
 * }
 * ```
 */
export const [BottomSheetProvider, useBottomSheetContext] = createBottomSheetContext<BottomSheetContextValue>()
