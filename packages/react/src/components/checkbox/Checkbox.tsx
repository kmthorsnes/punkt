import React, { ForwardedRef, forwardRef } from 'react'

export interface IPktCheckbox extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string
  hasTile?: boolean
  disabled?: boolean
  label?: string
  labelPosition?: 'right' | 'left'
  hideLabel?: boolean
  checkHelptext?: string
  hasError?: boolean
  defaultChecked?: boolean
  isSwitch?: boolean
  value?: string
}

export const PktCheckbox = forwardRef(
  (
    {
      id,
      hasTile = false,
      disabled = false,
      label,
      labelPosition = 'right',
      hideLabel = false,
      checkHelptext,
      hasError = false,
      isSwitch = false,
      className,
      ...props
    }: IPktCheckbox,
    ref: ForwardedRef<HTMLInputElement>,
  ): React.ReactElement => {
    // Define the classes
    const classes = [className, 'pkt-input-check'].filter(Boolean).join(' ')

    return (
      <div className={classes}>
        <div
          className={`pkt-input-check__input ${hasTile ? 'pkt-input-check__input--tile' : ''} ${
            disabled && hasTile ? 'pkt-input-check__input--tile-disabled' : ''
          }`}
        >
          {label && labelPosition === 'left' && (
            <label
              className={`pkt-input-check__input-label ${hideLabel ? 'pkt-sr-only' : ''}`}
              htmlFor={id}
            >
              {label}
              {checkHelptext && (
                <div className="pkt-input-check__input-helptext">{checkHelptext}</div>
              )}
            </label>
          )}
          <input
            ref={ref}
            className={`pkt-input-check__input-checkbox ${
              hasError ? 'pkt-input-check__input-checkbox--error' : ''
            }`}
            type="checkbox"
            role={isSwitch ? 'switch' : 'checkbox'}
            id={id}
            disabled={disabled}
            {...props}
          />
          {label && labelPosition === 'right' && (
            <label
              className={`pkt-input-check__input-label ${hideLabel ? 'pkt-sr-only' : ''}`}
              htmlFor={id}
            >
              {label}
              {checkHelptext && (
                <div className="pkt-input-check__input-helptext">{checkHelptext}</div>
              )}
            </label>
          )}
        </div>
      </div>
    )
  },
)

PktCheckbox.displayName = 'PktCheckbox'
