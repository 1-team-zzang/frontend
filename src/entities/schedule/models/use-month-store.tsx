import { create } from 'zustand'

import { getInitialMonth } from '@/features/calendar/utils'

import type { Month } from '@/features/calendar/type'
import type { SetStateAction } from 'react'

interface MonthsState {
  months: Month[]
  setMonths: (updater: SetStateAction<Month[]>) => void
}

export const useMyMonthsStore = create<MonthsState>((set) => ({
  months: getInitialMonth(false),
  setMonths: (updater) =>
    set((state) => ({
      months: typeof updater === 'function' ? (updater as (prev: Month[]) => Month[])(state.months) : updater,
    })),
}))

interface FriendMonthsState {
  byFriend: Record<string, Month[]>
  getMonths: (friendId: string) => Month[]
  setMonths: (friendId: string, updater: SetStateAction<Month[]>) => void
  clearFriend: (friendId: string) => void
}
const INITIAL_MONTH: Month[] = getInitialMonth(false)

export const useFriendMonthsStore = create<FriendMonthsState>()((set, get) => ({
  byFriend: {},
  getMonths: (friendId) => get().byFriend[friendId] ?? INITIAL_MONTH,
  setMonths: (friendId, updater) =>
    set((s) => {
      const prev = s.byFriend[friendId] ?? INITIAL_MONTH
      const next = typeof updater === 'function' ? (updater as (p: Month[]) => Month[])(prev) : updater
      return { byFriend: { ...s.byFriend, [friendId]: next } }
    }),
  clearFriend: (friendId) =>
    set((s) => {
      const copy = { ...s.byFriend }
      delete copy[friendId]
      return { byFriend: copy }
    }),
}))

export function useFriendMonths(friendId: string) {
  const months = useFriendMonthsStore((s) => s.getMonths(friendId))
  const setMonthsById = useFriendMonthsStore((s) => s.setMonths)
  const setMonths = (updater: SetStateAction<Month[]>) => setMonthsById(friendId, updater)
  return { months, setMonths }
}
