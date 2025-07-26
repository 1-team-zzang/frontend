import { cn } from '@/shared/utils/cn'

interface Props {
  className?: string
}

export default function AppointmentDetailSkeleton({ className }: Props) {
  return (
    <section className={cn('', className)}>
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-20">
        <div className="w-20 h-6 bg-gray-20 rounded animate-pulse" />
        <div className="w-6 h-6 bg-gray-20 rounded animate-pulse" />
      </div>

      <div className="flex flex-col gap-4 mx-4 mt-6">
        <div className="w-full rounded-[0.625rem] border border-gray-20 overflow-hidden bg-gray-1 pt-4 pb-5">
          <div className="px-6 pb-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-[0.3125rem]">
                <div className="w-8 h-4 bg-gray-20 rounded animate-pulse" />
                <div className="w-16 h-4 bg-gray-20 rounded animate-pulse" />
              </div>
              <div className="w-20 h-4 bg-gray-20 rounded animate-pulse" />
            </div>
          </div>

          <div className="px-6">
            <div className="border-b border-[#D9D9D9]" />
            <div className="pt-5 flex flex-col gap-3">
              <div className="w-full h-[200px] bg-gray-20 rounded-[0.625rem] animate-pulse" />
              <div className="space-y-2">
                <div className="w-full h-4 bg-gray-20 rounded animate-pulse" />
                <div className="w-3/4 h-4 bg-gray-20 rounded animate-pulse" />
                <div className="w-1/2 h-4 bg-gray-20 rounded animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full rounded-[0.625rem] border border-gray-20 overflow-hidden p-0">
          <div className="flex flex-col gap-4 px-6 pt-5 pb-6">
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 rounded-full bg-gray-20 animate-pulse" />
              <div className="w-32 h-5 bg-gray-20 rounded animate-pulse" />
            </div>

            <div className="space-y-3">
              <div className="flex gap-2">
                <div className="w-8 h-4 bg-gray-20 rounded animate-pulse" />
                <div className="w-40 h-4 bg-gray-20 rounded animate-pulse" />
              </div>
              <div className="flex gap-2">
                <div className="w-8 h-4 bg-gray-20 rounded animate-pulse" />
                <div className="w-40 h-4 bg-gray-20 rounded animate-pulse" />
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="flex-1 py-3 bg-gray-20 animate-pulse" />
            <div className="flex-1 py-3 bg-gray-20 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
