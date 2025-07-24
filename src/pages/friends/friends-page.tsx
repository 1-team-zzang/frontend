import FriendList from '@/features/friends/ui/friend-list'
import Button from '@/shared/ui/button/button.tsx'
import Header from '@/shared/ui/header/header'

export default function FriendsPage() {
  const cnt: number = 0
  return (
    <>
      <Header leftButton={<div />} rightButton={<button>추가</button>}>
        캘메이트
      </Header>
      <div className="px-5 py-3">
        <Button intent="outlined" className="w-full" disabled={cnt === 0}>
          {cnt > 0 ? `대기 중 초대 ${cnt}` : '친구 요청 없음'}
        </Button>
      </div>
      <FriendList />
    </>
  )
}
