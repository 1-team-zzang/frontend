import { format, parseISO } from 'date-fns'

export function formatDateToYMD(date: string | Date) {
  const formattedDate = typeof date === 'string' ? parseISO(date) : date
  return format(formattedDate, 'yyyy-MM-dd')
}
