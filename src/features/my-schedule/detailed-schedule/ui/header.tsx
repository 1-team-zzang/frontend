import { IconArrowLeft } from '@/shared/assets/icons'
import Text from '@/shared/ui/text/text'

interface Props {
  date: string
}

export default function Header({ date }: Props) {
  return (
    <div className="flex justify-between items-center border-t border-b border-gray-10 py-[0.625rem] px-[1.25rem] z-fixed">
      <IconArrowLeft className="size-4" />
      <Text as="h1" typography="h2-heading">
        {date}
      </Text>
      <div className="size-4" />
    </div>
  )
}
