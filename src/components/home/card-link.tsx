import Link from 'next/link'

export const CardLink = ({
  icon,
  content,
  link,
}: {
  icon: JSX.Element
  content: string
  link: string
}) => {
  return (
    <Link href={link} className="hover:underline">
      <div className="flex space-x-4 rounded p-6 shadow transition-colors hover:bg-gray-400">
        {icon}
        <p className="font-medium">{content}</p>
      </div>
    </Link>
  )
}
