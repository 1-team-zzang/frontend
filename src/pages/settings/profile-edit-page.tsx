import ProfileEditForm from '@/features/profile/image/ui/profile-edit-form'
import { Header, PageBackButton } from '@/shared/ui'

function ProfileEditPage() {
  return (
    <>
      <Header onNavigate={<PageBackButton />} onClick={<div />}>
        프로필 수정
      </Header>
      <main className="py-8 px-4">
        <ProfileEditForm />
      </main>
    </>
  )
}

export default ProfileEditPage
