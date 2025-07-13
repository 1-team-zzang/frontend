import { cn } from '../../utils'

interface Props {
  message: string
  className?: string
}

export default function FormErrorMessage({ message, className }: Props) {
  return <p className={cn('', className)}>{message}</p>
}
