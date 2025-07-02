import { Github } from 'lucide-react'

export const Footer = () => (
  <footer className="mx-auto max-w-5xl px-2 pb-4 text-sm">
    <hr className="mb-4 border-slate-800" />
    <div className="flex justify-between">
      <p className="flex items-center">
        <Github className="mr-2 size-4" />
        <a
          href="https://github.com/hendraaagil/streamkit"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold hover:underline"
        >
          Source Code
        </a>
      </p>
      <p>
        Created by{' '}
        <a
          href="https://hendraaagil.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold hover:underline"
        >
          Hendra Agil
        </a>
      </p>
    </div>
  </footer>
)
