import { cn } from '@/shared/utils'

interface TimeSelectorProps<T extends string | number> {
  values: T[]
  selected: T
  onSelect: (value: T) => void
  formatter?: (value: T) => string
  className?: string
}

export default function TimeSelector<T extends string | number>({
  values,
  selected,
  onSelect,
  formatter = (v) => String(v),
  className,
}: TimeSelectorProps<T>) {
  return (
    <div
      className={cn(
        'flex flex-col items-center text-gray-90 p-2.5 h-[16.625rem] gap-y-2.5 overflow-y-scroll snap-y',
        className,
      )}
    >
      {values.map((value) => (
        <button
          key={value}
          onClick={() => onSelect(value)}
          className={`min-w-[2.625rem] min-h-[2.063rem] rounded-lg text-sm font-medium ${
            value === selected ? 'bg-primary-70 text-white' : 'hover:bg-primary-5'
          }`}
        >
          {formatter(value)}
        </button>
      ))}
    </div>
  )
}
