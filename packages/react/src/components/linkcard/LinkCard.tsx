import React, { ForwardedRef, forwardRef } from 'react'

import { PktIcon } from '../icon/Icon'

export interface IPktLinkCard extends React.HTMLAttributes<HTMLAnchorElement> {
  skin?: 'normal' | 'blue' | 'beige' | 'beige-outline' | 'grey-outline'
  title?: string
  href?: string
  iconName?: string
  openInNewTab?: boolean
  external?: boolean
}

export const PktLinkCard = forwardRef(
  (
    {
      children,
      className,
      iconName = 'user',
      openInNewTab = false,
      skin = 'normal',
      href = '#',
      external = false,
      title,
      ...props
    }: IPktLinkCard,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => {
    const classes = [className, 'pkt-linkcard', skin && `pkt-linkcard--${skin}`]
      .filter(Boolean)
      .join(' ')
    return (
      <a
        {...props}
        href={href}
        className={`pkt-linkcard pkt-link ${classes}`}
        target={openInNewTab ? '_blank' : '_self'}
        rel={openInNewTab ? 'noopener noreferrer' : undefined}
        ref={ref}
      >
        <PktIcon className="pkt-link__icon" name={iconName}></PktIcon>
        <div className="pkt-linkcard__content">
          <div className={`pkt-linkcard__title ${external ? 'pkt-link pkt-link--external' : ''}`}>
            {title}
          </div>
          <div className="pkt-linkcard__text">{children}</div>
        </div>
      </a>
    )
  },
)

PktLinkCard.displayName = 'PktLinkCard'
