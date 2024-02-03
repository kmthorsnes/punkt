import React, { forwardRef, HTMLProps } from 'react'

import { PktButton } from '../button/Button'

interface SearchSuggestion {
  title?: string
  text?: string
  href?: string
  onClick?: () => void
}

interface ISearchInput extends HTMLProps<HTMLFormElement & HTMLDivElement> {
  action?: string
  appearance?: 'local' | 'local-with-button' | 'global'
  disabled?: boolean
  fullwidth?: boolean
  id: string
  label?: string
  method?: 'get' | 'post' | 'dialog'
  name?: string
  placeholder?: string
  suggestions?: SearchSuggestion[]
  value?: string | undefined
  onSearch?: (value: string) => void
  onSuggestionClick?: (index: number) => void
}

export const PktSearchInput = forwardRef<HTMLFormElement & HTMLDivElement, ISearchInput>(
  (
    {
      action,
      appearance = 'local',
      disabled = false,
      fullwidth = false,
      id,
      label,
      method = 'get',
      name,
      placeholder = 'Søk…',
      suggestions,
      value = '',
      onSearch,
      onSuggestionClick,
      ...props
    },
    ref,
  ) => {
    const handleSuggestionClick = (cb: (() => void) | undefined, index: number) => {
      if (cb) {
        cb()
      } else if (onSuggestionClick) {
        onSuggestionClick(index)
      }
    }

    const wrapperClass = `pkt-searchinput pkt-searchinput--${appearance} ${
      fullwidth ? 'pkt-searchinput--fullwidth' : ''
    }`

    const WrapperElement = action ? 'form' : 'div'
    const LabelElement = label ? 'label' : 'div'

    return (
      <WrapperElement
        className={wrapperClass}
        onSubmit={onSearch && (() => onSearch(value))}
        action={action ? action : undefined}
        method={action ? method : undefined}
        role="search"
        ref={ref}
        {...props}
      >
        <LabelElement
          htmlFor={label ? id : undefined}
          className={label ? 'pkt-inputwrapper__label' : ''}
        >
          {label && <>{label}</>}
          <div
            className={appearance === 'local' ? 'pkt-input__container' : 'pkt-searchinput__field'}
          >
            <input
              className={`pkt-input ${fullwidth ? 'pkt-input--fullwidth' : ''}`}
              type="search"
              name={name || id}
              id={id}
              placeholder={placeholder}
              value={value}
              disabled={disabled}
              onInput={onSearch && ((event) => onSearch(event.currentTarget.value))}
              autoComplete="off"
              aria-autocomplete="list"
              aria-controls={`${id}-suggestions`}
            />
            <PktButton
              className={`pkt-searchinput__button ${
                appearance === 'local' ? 'pkt-input-icon' : ''
              }`}
              variant="icon-only"
              iconName="magnifying-glass-big"
              skin={appearance === 'local' ? 'tertiary' : 'primary'}
              color={appearance === 'global' ? 'yellow' : undefined}
              type="submit"
              disabled={disabled}
              onClick={onSearch && (() => onSearch(value))}
              onKeyUp={onSearch && ((event) => event.key === 'Enter' && onSearch(value))}
            >
              {label || placeholder}
            </PktButton>
          </div>
        </LabelElement>
        {suggestions && (
          <ul
            id={`${id}-suggestions`}
            className="pkt-searchinput__suggestions"
            aria-live="assertive"
          >
            {suggestions.map((suggestion, index) => (
              <li key={`search-suggestion-${index}`}>
                {React.createElement(
                  suggestion.href ? 'a' : suggestion.onClick ? 'button' : 'div',
                  {
                    href: suggestion.href,
                    className: `pkt-searchinput__suggestion ${
                      suggestion.onClick ? 'pkt-link-button' : ''
                    } ${
                      suggestion.href || suggestion.onClick
                        ? 'pkt-searchinput__suggestion--has-hover'
                        : ''
                    }`,
                    type: suggestion.onClick ? 'button' : undefined,
                    onClick: () => handleSuggestionClick(suggestion.onClick, index),
                    onKeyUp: () => handleSuggestionClick(suggestion.onClick, index),
                  },
                  <>
                    {suggestion.title && (
                      <h3 className="pkt-searchinput__suggestion-title">{suggestion.title}</h3>
                    )}
                    {suggestion.text && (
                      <p className="pkt-searchinput__suggestion-text">{suggestion.text}</p>
                    )}
                  </>,
                )}
              </li>
            ))}
          </ul>
        )}
      </WrapperElement>
    )
  },
)
