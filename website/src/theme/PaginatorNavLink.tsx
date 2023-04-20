import React from 'react'
import cx from 'clsx'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import type { Props } from '@theme/PaginatorNavLink'
import Link from '@docusaurus/Link'
import Icon from '../ui/iconography/Icon'

export default function PaginatorNavLink({ permalink, title, isNext }: Props) {
  return (
    <div className={cx('flex-1', isNext ? 'text-right' : 'text-left')}>
      <Link to={permalink}>
        {!isNext && <Icon className="icon-previous mr-1" icon={faChevronLeft} />}
        {title}
        {isNext && <Icon className="icon-next ml-1" icon={faChevronRight} />}
      </Link>
    </div>
  )
}
