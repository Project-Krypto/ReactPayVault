import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'

export interface CTAProps {
  children: React.ReactNode
  href: string
  color?: string
}

export default function CTA({ children, href, color }: CTAProps) {
  return (
    <Link
      href={href}
      className={clsx(
        'inline-flex items-center justify-center rounded-md px-2 py-1 text-base font-bold text-white transition-transform hover:scale-105 hover:text-white sm:px-3 sm:py-2 md:text-lg',
        color ?? 'bg-purple-600',
      )}
    >
      {children}
    </Link>
  )
}
