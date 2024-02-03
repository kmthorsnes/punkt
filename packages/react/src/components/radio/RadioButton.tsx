import React, { ForwardedRef, forwardRef } from 'react'

export interface IRadio extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  label: string;
  hasTile?: boolean;
  disabled?: boolean;
  checkHelptext?: string;
  hasError?: boolean;
  value?: string;
}

export const PktRadioButton = forwardRef(
  ({
    id,
    name,
    label,
    className,
    hasTile = false,
    disabled = false,
    checkHelptext,
    hasError = false,
    ...props }: IRadio,
    ref: ForwardedRef<HTMLInputElement>): React.ReactElement => {

    // Define the classes
    const classes = [
      className,
      'pkt-input-check',
    ].filter(Boolean)
      .join(' ')

    return (

      <div className={classes}>
        <div className={`pkt-input-check__input ${hasTile ? 'pkt-input-check__input--tile' : ''} ${disabled && hasTile ? 'pkt-input-check__input--tile-disabled' : ''}`}>
          <input
            ref={ref}
            className={`pkt-input-check__input-checkbox ${hasError ? 'pkt-input-check__input-checkbox--error' : ''}`}
            type="radio"
            id={id}
            disabled={disabled}
            name={name}
            {...props}
          />
          <label className="pkt-input-check__input-label" htmlFor={id}>
            {label}
            {checkHelptext && (
              <div className="pkt-input-check__input-helptext">
                {checkHelptext}
              </div>
            )}
          </label>
        </div>
      </div>
    )
  },
)

PktRadioButton.displayName = 'PktRadioButton'
