import { cva, type VariantProps } from 'class-variance-authority'

export type ButtonVariantProps = VariantProps<typeof buttonVariants>
export const buttonVariants = cva(['flex w-[120px] h-[44px] content-center items-center rounded text-center'], {
  variants: {
    intent: {
      solid: ['font-normal text-base leading-[1.6rem]'],
      outlined: [''],
    },
    size: {
      small: [''],
    },
    active: {
      true: '',
      false: '',
    },
    disabled: {
      true: '',
      false: '',
    },
  },
  compoundVariants: [
    {
      intent: 'solid',
      active: true,
      class: 'bg-[#21DC0B]',
    },
    {
      intent: 'solid',
      disabled: true,
      class: '',
    },
    {
      intent: 'outlined',
      active: true,
      class: '',
    },
    {
      intent: 'outlined',
      active: true,
      class: '',
    },
  ],
  defaultVariants: {
    intent: 'solid',
    size: 'small',
  },
})
