import { useUserStore } from '@/entities/user/models/use-user-store'

export default function useAuthenticate() {
  const { user } = useUserStore()
  // NOTE 이 부분 리뷰 부탁드립니다

  return !!user
}
