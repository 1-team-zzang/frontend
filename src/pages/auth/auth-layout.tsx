import { Outlet } from 'react-router'

export default function Authlayout() {
  return (
    <div>
      {/* TODO 로그인, 회원가입 페이지 디자인 나오면 레이아웃 수정 */}
      <main className="mx-4 mt-20">
        <Outlet />
      </main>
    </div>
  )
}
