import '@testing-library/jest-dom/extend-expect'

import { fireEvent, render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import React from 'react'

import { PktTextinput } from './Textinput'

expect.extend(toHaveNoViolations)

describe('PktTextinput', () => {
  test('renders input field with correct props', () => {
    const { getByLabelText } = render(<PktTextinput label="Input Label" id="inputId" />)

    const inputElement = getByLabelText('Input Label')
    expect(inputElement).toBeInTheDocument()
    expect(inputElement.tagName).toBe('INPUT')
    expect(inputElement.id).toBe('inputId')
  })

  test('renders error message when hasError prop is true', () => {
    const { getByText } = render(
      <PktTextinput label="Input Label" id="inputId" hasError errorMessage="Input error" />,
    )

    const errorMessage = getByText('Input error')
    expect(errorMessage).toBeInTheDocument()
    expect(errorMessage).toHaveClass('pkt-alert__text')
  })

  describe('PktTextinput', () => {
    test('toggles helptext class', () => {
      const { getByText, container } = render(
        <PktTextinput
          label="Input Label"
          id="inputId"
          helptext="Help Text"
          helptextDropdown="Help Text"
        />,
      )

      const expandButton = getByText('Les mer')
      const helptextElement = container.querySelector(
        '.pkt-inputwrapper__helptext-expandable-closed',
      )

      fireEvent.click(expandButton)
      expect(helptextElement).toHaveClass('pkt-inputwrapper__helptext-expandable-open')

      fireEvent.click(expandButton)
      expect(helptextElement).toHaveClass('pkt-inputwrapper__helptext-expandable-closed')
    })
  })

  describe('accessibility', () => {
    it('renders with no wcag errors with axe', async () => {
      const { container } = render(<PktTextinput label="Input Label" id="inputId" />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
