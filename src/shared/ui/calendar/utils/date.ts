export interface Month {
  year: number
  month: number // 0은 1월임
}

export function getNextMonth({ year, month }: Month): Month {
  const next = new Date(year, month + 1, 1)
  return { year: next.getFullYear(), month: next.getMonth() }
}

export function getPrevMonth({ year, month }: Month): Month {
  const prev = new Date(year, month - 1, 1)
  return { year: prev.getFullYear(), month: prev.getMonth() }
}
