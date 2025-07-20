import Text from '../text/text'

type Props = {
  onClick: () => void
}

export default function LoginButton({ onClick }: Props) {
  return (
    <Text as="button" typography="b2-normal" className="text-gray-20" onClick={onClick}>
      로그인
    </Text>
  )
}
