import {
  ChangeEvent,
  ForwardedRef,
  forwardRef,
  TextareaHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from 'react'

import { PktInputWrapper } from '../inputwrapper/InputWrapper'

export interface IPktTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string
  ariaDescribedby?: string
  ariaLabelledby?: string
  counter?: boolean
  counterMaxLength?: number
  disabled?: boolean
  errorMessage?: string
  hasError?: boolean
  helptext?: string
  helptextDropdown?: string
  helptextDropdownButton?: string
  inline?: boolean
  fullwidth?: boolean
  label: string
  name?: string
  optionalTag?: boolean
  optionalText?: string
  requiredTag?: boolean
  requiredText?: string
  placeholder?: string
  rows?: number
  useWrapper?: boolean
}

export const PktTextarea = forwardRef(
  (
    {
      id,
      ariaDescribedby,
      ariaLabelledby,
      counter,
      counterMaxLength,
      className,
      disabled,
      errorMessage,
      hasError,
      helptext,
      helptextDropdown,
      helptextDropdownButton,
      inline,
      fullwidth = false,
      label,
      name,
      optionalTag = false,
      optionalText,
      requiredTag = false,
      requiredText,
      placeholder,
      rows,
      useWrapper = true,
      onChange,
      ...props
    }: IPktTextareaProps,
    ref: ForwardedRef<HTMLTextAreaElement>,
  ) => {
    const classNames = [className, 'pkt-textinput', 'pkt-textarea'].join(' ')
    const labelledBy = ariaLabelledby || `${id}-label`

    const internalRef = useRef<HTMLTextAreaElement>(null)

    const [counterCurrent, setCounterCurrent] = useState(0)

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      counter && setCounterCurrent(e.currentTarget?.value?.length || 0)
      if (onChange) {
        return onChange(e)
      }
    }

    useEffect(() => {
      typeof ref === 'function' && ref(internalRef.current)
      counter && setCounterCurrent(internalRef?.current?.value?.length || 0)
    }, [ref])

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
        <textarea
          ref={internalRef}
          className={`pkt-input ${fullwidth ? 'pkt-input--fullwidth' : ''} ${
            counterMaxLength && counterCurrent > counterMaxLength ? 'pkt-input--counter-error' : ''
          }`}
          name={name || id}
          id={id}
          placeholder={placeholder}
          disabled={disabled}
          rows={rows}
          aria-labelledby={labelledBy}
          aria-invalid={hasError}
          aria-errormessage={`${id}-error`}
          {...props}
          onChange={handleChange}
        />
        {counter && (
          <div className="pkt-input__counter" aria-live="polite" aria-atomic={true}>
            {counterCurrent || 0}
            {counterMaxLength && `/${counterMaxLength}`}
          </div>
        )}
      </PktInputWrapper>
    )
  },
)
