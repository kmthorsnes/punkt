import React, { ForwardedRef, forwardRef, ReactNode, SelectHTMLAttributes } from 'react'

import { PktInputWrapper } from '../inputwrapper/InputWrapper'

export interface IPktSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  ariaDescribedby?: string
  ariaLabelledby?: string
  children?: ReactNode
  disabled?: boolean
  errorMessage?: string
  hasError?: boolean
  helptext?: string
  helptextDropdown?: string
  helptextDropdownButton?: string
  id: string
  inline?: boolean
  fullwidth?: boolean
  label: string
  name?: string
  optionalTag?: boolean
  optionalText?: string
  requiredTag?: boolean
  requiredText?: string
}

export const PktSelect = forwardRef(
  (
    {
      ariaDescribedby,
      ariaLabelledby,
      children,
      className,
      disabled = false,
      errorMessage,
      hasError,
      helptext,
      helptextDropdown,
      helptextDropdownButton,
      id,
      inline = false,
      fullwidth = false,
      label,
      name,
      optionalTag = false,
      optionalText,
      requiredTag = false,
      requiredText,
      ...props
    }: IPktSelectProps,
    ref: ForwardedRef<HTMLSelectElement>,
  ) => {
    const classNames = [className, 'pkt-select'].join(' ')
    return (
      <PktInputWrapper
        className={classNames}
        forId={id}
        label={label}
        helptext={helptext}
        helptextDropdown={helptextDropdown}
        helptextDropdownButton={helptextDropdownButton}
        optionalTag={optionalTag}
        optionalText={optionalText}
        requiredTag={requiredTag}
        requiredText={requiredText}
        hasError={hasError}
        errorMessage={errorMessage}
        disabled={disabled}
        inline={inline}
        ariaDescribedby={ariaDescribedby}
      >
        <select
          ref={ref}
          className={`pkt-input ${fullwidth ? 'pkt-input--fullwidth' : ''}`}
          aria-invalid={hasError}
          aria-errormessage={`${id}-error`}
          aria-labelledby={ariaLabelledby || `${id}-label`}
          disabled={disabled}
          id={id}
          name={name || id}
          {...props}
        >
          {children}
        </select>
      </PktInputWrapper>
    )
  },
)
