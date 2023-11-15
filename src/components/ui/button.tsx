export const Button = ({
  children,
  ...props
}: {
  children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className="rounded bg-green-500 px-4 py-2 font-semibold text-white hover:bg-green-700"
      {...props}
    >
      {children}
    </button>
  )
}
