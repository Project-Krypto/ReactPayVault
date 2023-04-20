import React from 'react'
import cx from 'clsx'
import type { Props } from '@theme/PaginatorNavLink'
import Icon from '../ui/iconography/Icon'
import Link from '../ui/typography/Link'

export default function PaginatorNavLink({ permalink, title, isNext }: Props) {
  return (
    <div className={cx('flex-1', isNext ? 'text-right' : 'text-left')}>
      <Link weight="bold" to={permalink}>
        {!isNext && <Icon className="icon-previous mr-1" icon={'chevron-left'} />}
        {title}
        {isNext && <Icon className="icon-next ml-1" icon={'chevron-right'} />}
      </Link>
    </div>
  )
}
