import '@testing-library/jest-dom/extend-expect'

import { fireEvent, render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import React from 'react'

import { PktSelect } from './Select'

expect.extend(toHaveNoViolations)

describe('PktSelect', () => {
  test('renders select field with correct props', () => {
    const { getByLabelText } = render(<PktSelect label="Input Label" id="inputId" />)

    const selectElement = getByLabelText('Input Label')
    expect(selectElement).toBeInTheDocument()
    expect(selectElement.tagName).toBe('SELECT')
    expect(selectElement.id).toBe('inputId')
  })

  test('renders error message when hasError prop is true', () => {
    const { getByText } = render(
      <PktSelect label="Input Label" id="inputId" hasError errorMessage="Input error" />,
    )

    const errorMessage = getByText('Input error')
    expect(errorMessage).toBeInTheDocument()
    expect(errorMessage).toHaveClass('pkt-alert__text')
  })

  describe('PktSelect', () => {
    test('toggles helptext class', () => {
      const { getByText, container } = render(
        <PktSelect
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
      const { container } = render(<PktSelect label="Input Label" id="inputId" />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
