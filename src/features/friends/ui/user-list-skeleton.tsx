export default function UserListSkeleton() {
  return (
    <div className="p-2 overflow-y-auto h-64 mt-2 flex flex-col gap-3 animate-pulse">
      {Array.from({ length: 4 }).map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index} className="flex justify-between items-center p-2">
          <div className="flex gap-3 items-center">
            {/* 프로필 이미지 */}
            <div className="w-10 h-10 rounded-full bg-gray-10" />
            {/* 이름 + 이메일 */}
            <div className="flex flex-col gap-1">
              <div className="h-4 w-24 rounded bg-gray-10" />
              <div className="h-3 w-32 rounded bg-gray-10" />
            </div>
          </div>
          {/* 친구 or 버튼 자리 */}
          <div className="h-8 w-16 rounded bg-gray-10" />
        </div>
      ))}
    </div>
  )
}
