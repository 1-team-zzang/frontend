import type { ColorType } from '@/entities/schedule/lib'

export function formatColor() {
  const colorMap: Record<ColorType, string> = {
    RED: 'bg-calendar-red',
    YELLOW: 'bg-calendar-yellow',
    GREEN: 'bg-calendar-green',
    BLUE: 'bg-calendar-blue',
    PURPLE: 'bg-calendar-purple',
  }

  return colorMap
}
