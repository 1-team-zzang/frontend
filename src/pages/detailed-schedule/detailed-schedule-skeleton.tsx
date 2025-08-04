export default function DetailedScheduleSkeleton() {
  return (
    <div className="w-full h-full bg-white p-6 rounded-[0.625em] flex flex-col gap-4 mb-4 animate-pulse">
      {/* Title 영역 */}
      <div className="flex items-center justify-center gap-2">
        <div className="w-4 h-4 rounded-full bg-gray-10" />
        <div className="w-[90%] h-6 bg-gray-10 rounded" />
      </div>

      {/* 날짜 영역 */}
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <div className="w-24 h-4 bg-gray-10 rounded" />
          <div className="w-20 h-3 bg-gray-10 rounded" />
        </div>
        <div className="size-5 bg-gray-10 rounded" />
        <div className="flex flex-col gap-1">
          <div className="w-24 h-4 bg-gray-10 rounded" />
          <div className="w-20 h-3 bg-gray-10 rounded" />
        </div>
      </div>

      <hr className="text-gray-10" />

      {/* 공개 */}
      <div className="flex justify-between items-center">
        <div className="w-12 h-4 bg-gray-10 rounded" />
        <div className="w-20 h-4 bg-gray-10 rounded" />
      </div>
      <hr className="text-gray-10" />

      {/* 반복 */}
      <div className="flex justify-between items-center">
        <div className="w-12 h-4 bg-gray-10 rounded" />
        <div className="w-16 h-4 bg-gray-10 rounded" />
      </div>
      <hr className="text-gray-10" />

      {/* 일정내용 */}
      <div className="flex flex-col gap-1">
        <div className="w-12 h-4 bg-gray-10 rounded" />
        <div className="w-full h-4 bg-gray-10 rounded" />
        <div className="w-3/4 h-4 bg-gray-10 rounded" />
      </div>
    </div>
  )
}
