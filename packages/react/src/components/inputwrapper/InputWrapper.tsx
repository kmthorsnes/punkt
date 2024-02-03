import React, { ForwardedRef, forwardRef, ReactNode, RefAttributes, useState } from 'react'

import { PktAlert } from '../alert/Alert'
import { PktButton } from '../button/Button'

export interface IPktInputWrapper extends RefAttributes<HTMLElement> {
  forId: string
  label: string
  helptext?: string
  helptextDropdown?: string
  helptextDropdownButton?: string
  optionalTag?: boolean
  optionalText?: string
  requiredTag?: boolean
  requiredText?: string
  hasError?: boolean
  errorMessage?: string
  disabled?: boolean
  inline?: boolean
  ariaDescribedby?: string
  useWrapper?: boolean
  children?: ReactNode
  className?: string
  hasFieldset?: boolean
}

export const PktInputWrapper = forwardRef(
  (
    {
      forId,
      label,
      helptext,
      helptextDropdown,
      helptextDropdownButton,
      optionalTag = false,
      optionalText = 'Valgfritt',
      requiredTag = false,
      requiredText = 'Må fylles ut',
      hasError,
      errorMessage,
      disabled,
      inline,
      ariaDescribedby,
      useWrapper = true,
      children,
      className,
      hasFieldset = false,
    }: IPktInputWrapper,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const [isHelpTextOpen, setIsHelpTextOpen] = useState(false)

    const toggleHelpText = () => {
      setIsHelpTextOpen(!isHelpTextOpen)
    }

    const tagClass = () => {
      if (optionalTag) {
        return 'pkt-tag pkt-tag--small pkt-tag--thin-text pkt-tag--blue-light'
      } else if (requiredTag) {
        return 'pkt-tag pkt-tag--small pkt-tag--thin-text pkt-tag--beige'
      } else {
        return ''
      }
    }

    const tagText = optionalTag ? optionalText : requiredTag ? requiredText : ''

    const disabledClass = disabled ? 'pkt-inputwrapper--disabled' : ''
    const inlineClass = inline ? 'pkt-inputwrapper--inline' : ''
    const errorClass = hasError ? 'pkt-inputwrapper--error' : ''

    const hasDropDown = !!helptextDropdown && helptextDropdown !== ''

    const dropdownButton =
      helptextDropdownButton || 'Les mer <span class="pkt-sr-only">om inputfeltet</span>'

    const LabelComponent = hasFieldset ? 'fieldset' : hasDropDown ? 'div' : 'label'
    const LabelTextComponent = hasFieldset ? 'legend' : hasDropDown ? 'h2' : 'span'

    const describedBy = ariaDescribedby
      ? ariaDescribedby
      : helptext
      ? `${forId}-helptext`
      : undefined

    return (
      <div
        className={['pkt-inputwrapper', className, disabledClass, inlineClass, errorClass].join(
          ' ',
        )}
        ref={ref}
      >
        {useWrapper ? (
          <>
            <LabelComponent
              htmlFor={!hasFieldset ? forId : undefined}
              aria-describedby={hasDropDown ? undefined : ariaDescribedby}
              className={`pkt-inputwrapper__label${
                hasFieldset ? ' pkt-inputwrapper__fieldset' : ''
              }`}
            >
              <LabelTextComponent
                id={`${forId}-label`}
                className={`${hasFieldset ? ' pkt-inputwrapper__legend' : ''}`}
              >
                {label}
                {tagText !== '' && <span className={tagClass()}>{tagText}</span>}
              </LabelTextComponent>
              {helptext && (
                <div
                  className="pkt-inputwrapper__helptext"
                  id={`${forId}-helptext`}
                  dangerouslySetInnerHTML={{ __html: helptext }}
                ></div>
              )}
              {hasDropDown && helptextDropdown !== '' && (
                <div>
                  <PktButton
                    skin="tertiary"
                    size="small"
                    variant="icon-right"
                    iconName={isHelpTextOpen ? 'chevron-thin-up' : 'chevron-thin-down'}
                    className="pkt-inputwrapper__helptext-expandable pkt-link pkt-link--icon-right"
                    onClick={toggleHelpText}
                  >
                    <span dangerouslySetInnerHTML={{ __html: dropdownButton }} />
                  </PktButton>
                  <div
                    className={`pkt-inputwrapper__helptext ${
                      isHelpTextOpen
                        ? 'pkt-inputwrapper__helptext-expandable-open'
                        : 'pkt-inputwrapper__helptext-expandable-closed'
                    }`}
                  >
                    <span dangerouslySetInnerHTML={{ __html: helptextDropdown }} />
                  </div>
                  {!hasFieldset && (
                    <label htmlFor={forId} className="pkt-sr-only" aria-describedby={describedBy}>
                      {label}
                    </label>
                  )}
                </div>
              )}
              <>{children}</>
            </LabelComponent>
          </>
        ) : (
          <>
            {!hasFieldset && (
              <label
                htmlFor={forId}
                className="pkt-sr-only"
                aria-describedby={describedBy}
                id={`${forId}-label`}
              >
                {label}
              </label>
            )}
            {children}
          </>
        )}
        {hasError && errorMessage && (
          <div>
            <PktAlert skin="error" aria-live="assertive" id={`${forId}-error`} compact>
              {errorMessage}
            </PktAlert>
          </div>
        )}
      </div>
    )
  },
)

PktInputWrapper.displayName = 'PktInputWrapper'
