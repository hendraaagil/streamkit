import Link from 'next/link'

const Wrapper = ({
  children,
  link,
  isExternal,
}: {
  children: React.ReactNode
  link: string
  isExternal?: boolean
}) => {
  if (isExternal) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={link} className="hover:underline">
      {children}
    </Link>
  )
}

export const CardLink = ({
  icon,
  content,
  link,
  isExternal,
}: {
  icon: React.ReactNode
  content: string
  link: string
  isExternal?: boolean
}) => {
  return (
    <Wrapper link={link} isExternal={isExternal}>
      <div className="flex space-x-4 rounded border border-slate-800 p-6 transition-colors hover:bg-slate-800">
        {icon}
        <p className="font-medium">{content}</p>
      </div>
    </Wrapper>
  )
}
