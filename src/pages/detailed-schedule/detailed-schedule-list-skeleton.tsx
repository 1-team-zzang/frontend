export default function DetailedScheduleListSkeleton() {
  return (
    <>
      {Array.from({ length: 5 }, (_, idx) => (
        <div
          key={idx}
          className="bg-white h-[5.625em] rounded-[0.625rem] flex items-center mb-4 gap-4 p-4 animate-pulse "
        >
          <div className="size-4 rounded-full bg-gray-10" />
          <div className="w-3/4 flex flex-col gap-2">
            <div className="w-full h-4 rounded bg-gray-10" />
            <div className="w-full h-4 rounded bg-gray-10" />
          </div>
        </div>
      ))}
    </>
  )
}
