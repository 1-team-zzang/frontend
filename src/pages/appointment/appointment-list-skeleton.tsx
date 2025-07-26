import { cn } from '@/shared/utils/cn'

interface Props {
  count?: number
  className?: string
}

export default function AppointmentListSkeleton({ count = 3, className }: Props) {
  return (
    <div className={cn('flex flex-col items-center py-6 gap-6 px-4', className)}>
      <div className="flex items-center bg-gray-5 rounded-full p-2 w-fit">
        <div className="flex items-center justify-center bg-gray-5 text-gray-60  ">
          <div className="w-20 h-8 bg-gray-20 rounded-full animate-pulse" />
        </div>
        <div className="flex items-center justify-center bg-gray-5 text-gray-60">
          <div className="w-20 h-8 bg-gray-20 rounded-full animate-pulse" />
        </div>
        <div className="flex items-center justify-center bg-gray-5 text-gray-60">
          <div className="w-20 h-8 bg-gray-20 rounded-full animate-pulse" />
        </div>
      </div>

      <div className="flex flex-col gap-5 w-full">
        {Array.from({ length: count }, (_, index) => (
          <div key={index} className="w-full rounded-[0.625rem] border border-gray-20 overflow-hidden p-0 relative">
            <div className="py-4 px-6 bg-gray-1">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-[0.3125rem]">
                  <div className="w-12 h-4 bg-gray-20 rounded animate-pulse" />
                  <div className="w-18 h-4 bg-gray-20 rounded animate-pulse" />
                </div>
                <div className="w-24 h-4 bg-gray-20 rounded animate-pulse" />
              </div>
            </div>
            <div className="flex flex-col items-center gap-[0.188rem] py-6">
              <div className="w-52 h-5 bg-gray-20 rounded animate-pulse mb-2" />
              <div className="flex items-center gap-[0.313rem]">
                <div className="w-10 h-4 bg-gray-20 rounded animate-pulse" />
                <div className="w-28 h-4 bg-gray-20 rounded animate-pulse" />
              </div>
              <div className="flex items-center gap-[0.313rem]">
                <div className="w-10 h-4 bg-gray-20 rounded animate-pulse" />
                <div className="w-28 h-4 bg-gray-20 rounded animate-pulse" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
