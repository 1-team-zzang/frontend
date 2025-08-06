import { createContextScope } from '@/shared/utils'

const createEditModeContext = createContextScope()

export interface EditModeContextValue {
  isEditMode: boolean
  onEditModeChange: (isEditMode: boolean) => void
}

export const [EditModeProvider, useEditModeContext] = createEditModeContext<EditModeContextValue>()
