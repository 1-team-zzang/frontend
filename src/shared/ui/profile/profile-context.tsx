import { createContextScope } from '@/shared/utils/create-context-scope.tsx'

const createProfileContext = createContextScope()

export interface ProfileContextType {
    src: string
    name?: string
}

export const [ProfileProvider, useProfileContext] = createProfileContext<ProfileContextType>()
