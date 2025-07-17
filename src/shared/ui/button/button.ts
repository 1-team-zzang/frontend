import { cva, type VariantProps } from 'class-variance-authority'

export type ButtonVariantProps = VariantProps<typeof buttonVariants>
export const buttonVariants = cva(['flex w-[7.5rem] min-h-[2.75rem] py-[0.625rem] items-center justify-center rounded'], {
  variants: {
    intent: {
      solid: ['font-normal text-base leading-[1.6rem] bg-primary-50'],
      outlined: ['font-semibold text-sm text-primary-80 border border-primary-80'],
    },
    size: {
      small: [''],
    },
    disabled: {
      true: 'pointer-events-none cursor-not-allowed',
      false: '',
    },
  },
  compoundVariants: [
    {
      intent: 'solid',
      disabled: true,
      class: 'bg-gray-20 text-gray-50',
    },
    {
      intent: 'solid',
      disabled: false,
      class: 'hover:bg-primary-60 active:bg-primary-60',
    },
    {
      intent: 'outlined',
      disabled: true,
      class: 'text-gray-40 border-gray-40',
    },
    {
      intent: 'outlined',
      disabled: false,
      class:
        'hover:bg-primary-1 hover:text-primary-90 hover:border-primary-90 active:bg-primary-1 active:text-primary-90 active:border-primary-90',
    },
  ],
  defaultVariants: {
    intent: 'solid',
    size: 'small',
    disabled: false,
  },
})
