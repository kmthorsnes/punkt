import React, { ForwardedRef } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** The input's label */
  label?: string
  /** The input's id */
  id: string
}

/**
 * Input component
 * @param {string} label - Label for the input
 * @param {string} id - Id for the input
 * @param {string} validationMessage - Validation message for the input
 * @param {React.InputHTMLAttributes<HTMLInputElement>} props - Other props to pass to the input
 * @returns {React.ReactElement} - React element
 *
 * @example
 * <Input label="First name" id="firstName" validationMessage="First name is required" />
 *
 */
export const PktInput = React.forwardRef(
  ({ label, id, children, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>): React.ReactElement => {
    return (
      <div className="pkt-form-group">
        <label htmlFor={id} className="pkt-form-label">
          {label}
        </label>
        <input className="pkt-form-input" id={id} {...props} ref={ref} />
        {children}
      </div>
    )
  },
)

PktInput.displayName = 'PktInput'
