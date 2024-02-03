import React, { ForwardedRef, forwardRef } from 'react'

import { PktIcon } from '../icon/Icon'

export interface IPktButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconName?: string
  secondIconName?: string
  mode?: 'light' | 'dark'
  size?: 'small' | 'medium' | 'large'
  color?: 'blue' | 'blue-outline' | 'green' | 'green-outline' | 'green-dark' | 'green-dark-outline' | 'beige-light' | 'beige-dark-outline' | 'yellow' | 'yellow-outline' | 'red' | 'red-outline'
  skin?: 'primary' | 'secondary' | 'tertiary'
  variant?: 'label-only' | 'icon-left' | 'icon-right' | 'icon-only' | 'icons-right-and-left'
  state?: 'normal' | 'focus' | 'hover' | 'active'
  type?: 'button' | 'submit' | 'reset'
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const PktButton = forwardRef(
  (
    {
      children,
      className,
      iconName = 'user',
      secondIconName = 'user',
      size = 'medium',
      skin = 'primary',
      type = 'button',
      variant = 'label-only',
      color,
      ...props
    }: IPktButton,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    const classes = [
      className,
      'pkt-btn',
      size && `pkt-btn--${size}`,
      skin && `pkt-btn--${skin}`,
      variant && `pkt-btn--${variant}`,
      color && `pkt-btn--${color}`,
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <button {...props} className={classes} type={type} ref={ref}>
        {variant !== 'label-only' && <PktIcon className="pkt-btn__icon" name={iconName}></PktIcon>}
        <span className="pkt-btn__text">{children}</span>
        {variant === 'icons-right-and-left' && (
          <PktIcon className="pkt-btn__icon" name={secondIconName}></PktIcon>
        )}
      </button>
    )
  },
)

PktButton.displayName = 'PktButton'
