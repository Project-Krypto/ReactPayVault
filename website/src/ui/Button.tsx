import React from 'react'
import cx from 'clsx'

export interface ButtonProps {
  className?: string
  disabled?: boolean
  label: string
  href?: string
  onClick?: () => void
  id?: string
  size?: 'df' | 'lg'
}

export default function Button({ className, disabled, label, href, onClick, id, size }: ButtonProps) {
  const isLink = !!href
  const Tag = isLink ? 'a' : 'button'

  return (
    <Tag
      className={cx(
        'bg-blurple-400 flex items-center justify-center rounded-md border border-transparent px-2 text-base font-bold text-white dark:bg-purple-600',
        disabled ? 'opacity-60' : 'hover:bg-blurple-500 cursor-pointer hover:text-white dark:hover:bg-purple-500',
        size === 'lg' ? 'py-2' : 'py-1',
        className,
      )}
      disabled={disabled}
      id={id}
      {...(isLink ? { href, target: '_blank' } : { onClick, type: 'button' })}
    >
      {label}
    </Tag>
  )
}
