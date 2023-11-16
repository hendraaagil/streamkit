import { tv, type VariantProps } from 'tailwind-variants'

const styles = tv({
  base: 'rounded px-4 py-2 font-medium transition-opacity hover:opacity-90',
  variants: {
    color: {
      neutral: 'bg-zinc-700 text-white',
      green: 'bg-green-700 text-white',
      blue: 'bg-blue-700 text-white',
      red: 'bg-red-700 text-white',
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
