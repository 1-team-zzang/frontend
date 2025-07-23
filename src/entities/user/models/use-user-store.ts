import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import type { User } from './user.types'

interface UserStoreState {
  user: User | null
  setUser: (user: User) => void
  clearUser: () => void
}

export const useUserStore = create(
  persist<UserStoreState>(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null }),
    }),
    { name: 'user' },
  ),
)
