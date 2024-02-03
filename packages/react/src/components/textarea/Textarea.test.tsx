import '@testing-library/jest-dom/extend-expect'

import { fireEvent, render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import React from 'react'

import { PktTextarea } from './Textarea'

expect.extend(toHaveNoViolations)

describe('PktTextarea', () => {
  test('renders input field with correct props', () => {
    const { getByLabelText } = render(<PktTextarea label="Input Label" id="inputId" />)

    const inputElement = getByLabelText('Input Label')
    expect(inputElement).toBeInTheDocument()
    expect(inputElement.tagName).toBe('TEXTAREA')
    expect(inputElement.id).toBe('inputId')
  })

  test('renders error message when hasError prop is true', () => {
    const { getByText } = render(
      <PktTextarea label="Input Label" id="inputId" hasError errorMessage="Input error" />,
    )

    const errorMessage = getByText('Input error')
    expect(errorMessage).toBeInTheDocument()
    expect(errorMessage).toHaveClass('pkt-alert__text')
  })

  describe('PktTextarea', () => {
    test('toggles helptext class', () => {
      const { getByText, container } = render(
        <PktTextarea
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
      const { container } = render(<PktTextarea label="Input Label" id="inputId" />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
