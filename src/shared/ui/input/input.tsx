import type { FieldValues, UseFormRegister, Path } from 'react-hook-form'
import { cn } from '../../utils'

interface InputProps<T extends FieldValues> extends React.InputHTMLAttributes<HTMLInputElement> {
  name: Path<T>
  register: UseFormRegister<T>
  variant?: Variant
}

type Variant = 'default'

const InputVariant: Record<Variant, string> = {
  default: '',
}

export default function Input<T extends FieldValues>({ register, name, variant = 'default', ...props }: InputProps<T>) {
  return <input className={cn(InputVariant[variant], props.className)} {...register(name)} {...props} />
}
