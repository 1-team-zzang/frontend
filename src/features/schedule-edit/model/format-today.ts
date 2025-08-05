import { addHours, setMilliseconds, setMinutes, setSeconds } from 'date-fns'

export function formatToday() {
  const today = new Date()
  const start = setMilliseconds(setSeconds(setMinutes(addHours(today, 1), 0), 0), 0)
  const end = addHours(start, 1)

  return {
    start,
    end,
  }
}
