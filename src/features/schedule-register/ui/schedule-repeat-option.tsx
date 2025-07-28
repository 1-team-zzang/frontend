import { useForm } from 'react-hook-form'

import { Input } from '@/shared/ui/input'

export default function RepeatDetailOptions({ methods }: { methods: ReturnType<typeof useForm> }) {
  return (
    <>
      <div className="flex gap-2">
        <button
          type="button"
          className={`px-3 py-1 rounded-lg ${
            methods.watch('repeatUnit') === 'count' ? 'bg-primary-70 text-white' : 'bg-gray-5'
          }`}
          onClick={() => methods.setValue('repeatUnit', 'count')}
        >
          횟수
        </button>
        <button
          type="button"
          className={`px-3 py-1 rounded-lg ${
            methods.watch('repeatUnit') === 'date' ? 'bg-primary-70 text-white' : 'bg-gray-5'
          }`}
          onClick={() => methods.setValue('repeatUnit', 'date')}
        >
          종료일
        </button>
      </div>

      {methods.watch('repeatUnit') === 'count' && (
        <div className="flex items-center gap-2">
          <Input
            type="number"
            className="w-16 text-center"
            {...methods.register('repeatCount', { valueAsNumber: true })}
          />
          <span>회 반복</span>
        </div>
      )}

      {methods.watch('repeatUnit') === 'date' && (
        <div className="flex items-center gap-2">
          <Input type="date" className="w-40" {...methods.register('repeatEndAt')} />
          <span>까지</span>
        </div>
      )}
    </>
  )
}
