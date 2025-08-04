interface RepeatTextOptions {
  repeatRule: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY' | ''
  repeatType: 'COUNT' | 'DATE' | null
  repeatCount: number | null
  repeatEndAt: string | null
}

export function getRepeatText({ repeatRule, repeatType, repeatCount, repeatEndAt }: RepeatTextOptions): string {
  if (repeatRule === '' || !repeatType) {
    return '없음'
  }

  const unitMap: Record<NonNullable<RepeatTextOptions['repeatRule']>, string> = {
    DAILY: '일',
    WEEKLY: '주',
    MONTHLY: '개월',
    YEARLY: '년',
    '': '',
  }

  const prefixMap: Record<NonNullable<RepeatTextOptions['repeatRule']>, string> = {
    DAILY: '매일',
    WEEKLY: '매주',
    MONTHLY: '매월',
    YEARLY: '매년',
    '': '',
  }

  const unit = unitMap[repeatRule]
  const prefix = prefixMap[repeatRule]

  if (repeatType === 'COUNT') {
    return `${prefix} 1${unit}마다 ${repeatCount}회 반복`
  }

  if (repeatType === 'DATE') {
    return `${prefix} 1${unit}마다 ${repeatEndAt}까지 반복`
  }

  return '없음'
}
