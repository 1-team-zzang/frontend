import { format, parseISO } from 'date-fns'

export function formatDateToYMD(date: string | Date, formatOption: 'dashed' | 'dotted' = 'dashed') {
  const formattedDate = typeof date === 'string' ? parseISO(date) : date

  if (formatOption === 'dotted') {
    return format(formattedDate, 'yyyy.MM.dd')
  }

  return format(formattedDate, 'yyyy-MM-dd')
}
