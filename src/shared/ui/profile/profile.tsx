import { ProfileProvider } from './profile-context'

import type { ReactNode } from 'react'

interface Props {
    src: string
    name?: string
    children: ReactNode
}

export default function Profile({ src, name, children }: Props) {
  return (
    <ProfileProvider value={{ src, name }}>
      {children}
    </ProfileProvider>
  )
}
