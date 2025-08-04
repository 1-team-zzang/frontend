export function formatRelativeDate(date: Date) {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new Error('Invalid date provided')
  }

  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

  // 미래 날짜 처리
  if (diffMs < 0) {
    return '오늘'
  }
  if (diffDays < 7) {
    return `${diffDays}일 전`
  }
  if (diffDays < 28) {
    return `${Math.floor(diffDays / 7)}주 전`
  }

  const diffMonths = Math.floor(diffDays / 30.44)
  if (diffMonths < 12) {
    return `${diffMonths}달 전`
  }

  const diffYears = Math.floor(diffMonths / 12)
  return `${diffYears}년 전`
}
