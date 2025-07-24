import MyCalendar from '@/features/my-schedule/ui/my-calendar'

export default function Home() {
  // const navigate = useNavigate()

  // const user = useUserStore((state) => state.user)

  // useEffect(() => {
  //   if (!user) {
  //     alert('로그인이 필요합니다')
  //     navigate('/auth/signin')
  //   }
  // }, [user, navigate])
  return <MyCalendar />
}
