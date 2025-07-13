import { useFormContext } from 'react-hook-form'

import { cn } from '../../utils/cn'

interface Props {
  name: string
  className?: string
}

// NOTE: 기본 Input 컴포넌트는 useForm에 종속시키지 않기 위해 register를 prop으로 받는다하셔서
// 아예 useForm에 종속적인 Input인 FormInput 컴포넌트도 있는게 좋다고 생각해서 만든건데
// 불필요한 prop drilling을 발생시키는 걸까요?

export default function FormInput({ name, className }: Props) {
  const { register } = useFormContext()
  //   TODO 임시 input / input 컴포넌트 변경하기
  return <input className={cn('', className)} {...register(name)} name={name} id={name} />
}
