import React, { ForwardedRef, forwardRef, useState } from 'react';

import { PktIcon } from '../icon/Icon'

export interface IPktTag extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  skin?: 'blue' | 'green' | 'red' | 'beige' | 'yellow' | 'grey' | 'blue-light';
  textStyle?: 'normal-text' | 'thin-text';
  size?: 'small' | 'medium' | 'large';
  closeTag?: boolean;
  iconName?: string;
  ariaLabel?: string;
}

export const PktTag = forwardRef(({
  children,
  className,
  skin = 'blue',
  textStyle = 'normal-text',
  size = 'medium',
  closeTag = false,
  iconName = '',
  type = 'button',
  ariaLabel = 'close',
  onClick = () => { },
}: IPktTag, ref: ForwardedRef<HTMLButtonElement>) => {
  const [closed, setClosed] = useState(false);

  const close = (event: React.MouseEvent<HTMLButtonElement>) => {
    setClosed(true);
    onClick(event);
  };

  const classes = [
    'pkt-tag',
    size && `pkt-tag--${size}`,
    skin && `pkt-tag--${skin}`,
    textStyle && `pkt-tag--${textStyle}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const buttonClass = [
    'pkt-tag',
    'pkt-btn',
    'pkt-btn--tertiary',
    size && `pkt-tag--${size}`,
    skin && `pkt-tag--${skin}`,
    textStyle && `pkt-tag--${textStyle}`,
    iconName && closeTag ? 'pkt-btn--icons-right-and-left' : null,
    closeTag && !iconName ? 'pkt-btn--icon-right' : null,
    className,
  ]
    .filter(Boolean)
    .join(' ');


  const open = !closed;

  if (closeTag && iconName) {
    return (
      <>
        {open && (
          <button
            className={buttonClass}
            type={type}
            aria-label={ariaLabel}
            onClick={close}
            ref={ref}
          >
            <PktIcon className="pkt-tag__icon" name={iconName}></PktIcon>
            {children}
            <PktIcon className="pkt-tag__close-btn" name="close"></PktIcon>
          </button>
        )}
      </>
    );
  } else if (closeTag) {
    return (
      <>
        {open && (
          <button
            className={buttonClass}
            type={type}
            aria-label={ariaLabel}
            onClick={close}
            ref={ref}
          >
            <PktIcon className="pkt-tag__close-btn" name="close"></PktIcon>
            {children}
          </button>
        )}
      </>
    );
  } else if (iconName) {
    return (
      <span className={classes}>
        <PktIcon className="pkt-tag__icon" name={iconName}></PktIcon>
        {children}
      </span>
    );
  } else {
    return (
      <span className={classes}>
        {children}
      </span>
    );
  }
});

PktTag.displayName = 'PktTag'
