import { useEffect } from 'react'
import { useNavigate } from 'react-router'

import MySchedule from '@/features/my-schedule/ui/my-schedule'

export default function Home() {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/auth/signin')
    }
  }, [navigate])
  return <MySchedule />
}
