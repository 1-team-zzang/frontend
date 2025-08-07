import { useState } from 'react'

import { useUserStore } from '@/entities/user'
import { useWithdrawMutation } from '@/features/auth/withdraw/model'
import { Header, Text, PageBackButton, Checkbox, Button } from '@/shared/ui'

export default function WithdrawPage() {
  const { user } = useUserStore()
  const { email } = user!
  const [isChecked, setIsChecked] = useState<boolean>(false)

  const withdrawMutation = useWithdrawMutation()

  const handleWithdraw = () => {
    withdrawMutation.mutate()
  }

  return (
    <>
      <Header onNavigate={<PageBackButton />} onClick={<div />}>
        회원탈퇴
      </Header>
      <main className="p-6 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <Text as="h3" typography="b2-heading">
            회원탈퇴 유의사항
          </Text>
          <Text as="p" typography="b2-normal" className="whitespace-normal">
            사용하고 계신 이메일({email})를 탈퇴하시면 본인과 타인 모두 재사용 및 복구가 불가하오니, 신중하게 선택하시기
            바랍니다. 부정 가입 또는 부정 이용이 의심되는 아이디는 탈퇴 후 6개월 간 동일한 실명 정보로 재가입할 수
            없습니다.
          </Text>
        </div>
        <div className="flex flex-col gap-2">
          <Text as="h3" typography="b2-heading">
            회원정보 및 서비스 이용기록 삭제
          </Text>
          <Text as="p" typography="b2-normal" className="whitespace-normal">
            탈퇴 시 회원 정보 및 캘린더 일정 등 이용기록은 모두 삭제되며, 삭제된 데이터는 복구 되지 않습니다. 삭제되는
            내용을 확인하신 후 필요한 데이터는 미리 백업해주십시오.
          </Text>
        </div>
        <div className="flex items-center gap-2 p-3 rounded bg-gray-1 justify-center">
          <Checkbox checked={isChecked} onCheckedChange={setIsChecked} />
          <Text as="span" typography="b2-normal" className="whitespace-normal">
            위 내용을 모두 확인하였으며, 이에 동의합니다.
          </Text>
        </div>
        <Text typography="b2-heading" className="text-center mt-5 mb-3">
          정말 캘픽을 떠나시겠어요?
        </Text>
        <Button className="w-full" disabled={!isChecked} onClick={handleWithdraw}>
          확인
        </Button>
      </main>
    </>
  )
}
