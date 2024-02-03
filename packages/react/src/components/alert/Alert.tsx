import React, { ForwardedRef, forwardRef, useState } from 'react'

import { PktIcon } from '../icon/Icon'

export interface IPktAlert extends React.HTMLAttributes<HTMLDivElement> {
  skin?: 'error' | 'success' | 'warning' | 'info'
  closeAlert?: boolean
  onClose?: () => void
  title?: string
  date?: string
  ariaLive?: 'off' | 'polite' | 'assertive'
  compact?: boolean
}

export const PktAlert = forwardRef(
  (
    {
      children,
      className,
      skin = 'info',
      closeAlert = false,
      onClose,
      title,
      date,
      ariaLive = 'polite',
      compact = false,
      ...props
    }: IPktAlert,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const classes = [
      className,
      'pkt-alert',
      skin && `pkt-alert--${skin}`,
      compact && 'pkt-alert--compact',
    ]
      .filter(Boolean)
      .join(' ')

    const [isDisplayed, setIsDisplayed] = useState(true)

    const handleClose = () => {
      setIsDisplayed(false)
      if (onClose) {
        onClose()
      }
    }

    return isDisplayed ? (
      <div {...props} className={classes} aria-live={ariaLive} ref={ref}>
        <PktIcon
          className="pkt-alert__icon"
          name={skin === 'info' ? 'alert-information' : `alert-${skin}`}
        />

        {closeAlert && (
          <div className="pkt-alert__close">
            <button
              type="button"
              className="pkt-btn pkt-btn--tertiary pkt-btn--small pkt-btn--icon-only"
              tabIndex={0}
              aria-label="close"
              onClick={handleClose}
            >
              <PktIcon name="close" className="pkt-btn__icon" aria-hidden="true" />
            </button>
          </div>
        )}

        {title && <div className="pkt-alert__title">{title}</div>}

        <div className="pkt-alert__text">{children}</div>

        {date && <div className="pkt-alert__date">Sist oppdatert: {date}</div>}
      </div>
    ) : null
  },
)
