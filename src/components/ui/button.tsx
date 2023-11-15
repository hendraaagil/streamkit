import { tv, type VariantProps } from 'tailwind-variants'

const styles = tv({
  base: 'rounded px-4 py-2 transition-opacity hover:opacity-90',
  variants: {
    color: {
      primary: 'bg-blue-500 text-white',
      neutral: 'bg-zinc-500 text-white',
    },
  },
  defaultVariants: {
    color: 'neutral',
  },
})

type ButtonVariants = VariantProps<typeof styles>

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
}

export const Button = ({
  color,
  children,
  ...rest
}: ButtonProps & ButtonVariants) => {
  return (
    <button className={styles({ color: color })} {...rest}>
      {children}
    </button>
  )
}
