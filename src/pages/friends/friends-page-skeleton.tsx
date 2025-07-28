export default function FriendsPageSkeleton() {
  return (
    <div>
      <div className="px-5 py-3 animate-pulse">
        <div className="h-10 w-full rounded-md bg-gray-10" />
      </div>
      <div className="mt-4 ">
        {Array.from({ length: 5 }).map((_, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={idx} className="flex items-center justify-between p-4 border-b border-b-gray-20 animate-pulse">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-10" /> {/* 프로필 이미지 */}
              <div className="h-4 w-24 rounded bg-gray-10" /> {/* 이름 */}
            </div>
            <div className="flex gap-3 items-center">
              <div className="size-8 rounded bg-gray-10" /> {/* 친구 삭제 버튼 자리 */}
              <div className="w-6 h-6 rounded-full bg-gray-10" /> {/* 아이콘 */}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
