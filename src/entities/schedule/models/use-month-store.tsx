import { create } from 'zustand'

import type { Month } from '@/features/calendar/type'
import type { SetStateAction } from 'react'

interface MonthsState {
  months: Month[]
  setMonths: (updater: SetStateAction<Month[]>) => void
}

export const useMonthsStore = create<MonthsState>((set) => ({
  months: [],
  setMonths: (updater) =>
    set((state) => ({
      months: typeof updater === 'function' ? (updater as (prev: Month[]) => Month[])(state.months) : updater,
    })),
}))
