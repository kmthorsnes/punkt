import React, { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react'

import { PktIcon } from '../icon/Icon'
import { PktInputWrapper } from '../inputwrapper/InputWrapper'

export interface IPktTextinput extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  ariaDescribedby?: string
  ariaLabelledby?: string
  autocomplete?: string
  disabled?: boolean
  errorMessage?: string
  hasError?: boolean
  helptext?: string
  helptextDropdown?: string
  helptextDropdownButton?: string
  iconNameRight?: string
  inline?: boolean
  fullwidth?: boolean
  label: string
  name?: string
  optionalTag?: boolean
  optionalText?: string
  requiredTag?: boolean
  requiredText?: string
  placeholder?: string
  prefix?: string
  suffix?: string
  type?: string
  useWrapper?: boolean
  value?: string
  omitSearchIcon?: boolean
}

export const PktTextinput = forwardRef(
  (
    {
      id,
      ariaDescribedby,
      ariaLabelledby,
      autocomplete = 'off',
      className,
      disabled = false,
      errorMessage,
      hasError = false,
      helptext,
      helptextDropdown,
      helptextDropdownButton,
      iconNameRight,
      inline = false,
      fullwidth = false,
      label,
      name,
      optionalTag = false,
      optionalText,
      requiredTag = false,
      requiredText,
      placeholder,
      prefix,
      suffix,
      type = 'text',
      useWrapper = true,
      omitSearchIcon = false,
      value,
      ...props
    }: IPktTextinput,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const classNames = [className, 'pkt-textinput'].join(' ')
    const labelledBy = ariaLabelledby || `${id}-label`
    const shouldShowSearchIcon = type === 'search' && !iconNameRight && !omitSearchIcon
    return (
      <PktInputWrapper
        ariaDescribedby={ariaDescribedby}
        className={classNames}
        disabled={disabled}
        errorMessage={errorMessage}
        forId={id}
        hasError={hasError}
        helptext={helptext}
        helptextDropdown={helptextDropdown}
        helptextDropdownButton={helptextDropdownButton}
        inline={inline}
        label={label}
        optionalTag={optionalTag}
        optionalText={optionalText}
        requiredTag={requiredTag}
        requiredText={requiredText}
        useWrapper={useWrapper}
      >
        <div className="pkt-input__container">
          {prefix && <div className="pkt-input-prefix">{prefix}</div>}
          <input
            ref={ref}
            className={`pkt-input ${fullwidth ? 'pkt-input--fullwidth' : ''}`}
            type={type}
            name={name || id}
            id={id}
            placeholder={placeholder}
            autoComplete={autocomplete}
            value={value}
            disabled={disabled}
            aria-invalid={hasError}
            aria-errormessage={`${id}-error`}
            aria-labelledby={labelledBy}
            {...props}
          />
          {suffix && (
            <p className="pkt-input-suffix">
              {suffix}
              {iconNameRight && <PktIcon className="pkt-input-suffix-icon" name={iconNameRight} />}
              {shouldShowSearchIcon && (
                <PktIcon className="pkt-input-suffix-icon" name="magnifying-glass-big" />
              )}
            </p>
          )}

          {!suffix && iconNameRight && <PktIcon className="pkt-input-icon" name={iconNameRight} />}
          {!suffix && shouldShowSearchIcon && (
            <PktIcon className="pkt-input-icon" name="magnifying-glass-big" />
          )}
        </div>
      </PktInputWrapper>
    )
  },
)
