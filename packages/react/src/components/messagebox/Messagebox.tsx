import React from 'react'

export interface IPktMessagebox extends React.HTMLAttributes<HTMLDivElement> {
  skin?: 'beige' | 'red' | 'green' | 'blue'
  title?: string
  compact?: boolean
}

export const PktMessagebox: React.FC<IPktMessagebox> = ({
  children,
  className,
  compact = false,
  skin = 'beige',
  title,
  ...props
}) => {
  const classes = [
    className,
    'pkt-messagebox',
    skin && `pkt-messagebox--${skin}`,
    compact && 'pkt-messagebox--compact',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div {...props} className={classes}>
      { title && <div className="pkt-messagebox__title">{title}</div> }

      <div className="pkt-messagebox__text">{children}</div>
    </div>
  )
}
