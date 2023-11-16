'use client'

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'

export const ProgressProviders = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      {children}
      <ProgressBar
        color="#111827"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  )
}
