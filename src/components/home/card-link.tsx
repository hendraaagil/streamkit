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
  icon: JSX.Element
  content: string
  link: string
  isExternal?: boolean
}) => {
  return (
    <Wrapper link={link} isExternal={isExternal}>
      <div className="flex space-x-4 rounded p-6 shadow transition-colors hover:bg-gray-400">
        {icon}
        <p className="font-medium">{content}</p>
      </div>
    </Wrapper>
  )
}
