import { useEffect } from 'react'
import { useNavigate } from 'react-router'

import { useUserStore } from '@/entities/user/models/use-user-store'
import MySchedule from '@/features/my-schedule/ui/my-schedule'

export default function Home() {
  const navigate = useNavigate()

  const user = useUserStore((state) => state.user)

  useEffect(() => {
    if (!user) {
      navigate('/auth/signin')
    }
  }, [user, navigate])
  return <MySchedule />
}
