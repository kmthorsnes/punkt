import '@testing-library/jest-dom/extend-expect'

import { fireEvent, render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import React from 'react'

import { PktSearchInput } from './SearchInput'

expect.extend(toHaveNoViolations)

describe('PktSearchInput', () => {
  it('renders with form element when action prop exists', () => {
    const { container } = render(<PktSearchInput id="test-search-input" action="/search" />)
    expect(container.querySelector('form')).toBeInTheDocument()
  })

  it('renders with div element when action prop does not exist', () => {
    const { container } = render(<PktSearchInput id="test-search-input" />)
    expect(container.querySelector('div')).toBeInTheDocument()
    expect(container.querySelector('form')).not.toBeInTheDocument();
  })

  it('renders with label element when label prop exists', () => {
    const { container } = render(<PktSearchInput id="test-search-input" label="Test Label" />)
    expect(container.querySelector('label')).toBeInTheDocument()
  })

  it('renders with div element when label prop does not exist', () => {
    const { container } = render(<PktSearchInput id="test-search-input" />)
    expect(container.querySelector('div')).toBeInTheDocument()
    expect(container.querySelector('label')).not.toBeInTheDocument()
  })

  it('calls onSearch prop with input value on button click', () => {
    const mockOnSearch = jest.fn()
    const { getByRole, getByPlaceholderText } = render(
      <PktSearchInput id="test-search-input" onSearch={mockOnSearch} />,
    )

    const inputElement = getByPlaceholderText('Søk…')
    const buttonElement = getByRole('button')

    // Type a value in the input
    fireEvent.input(inputElement, { target: { value: 'test value' } })

    // Click the button
    fireEvent.click(buttonElement)

    // Check if onSearch was called with the correct value
    expect(mockOnSearch).toHaveBeenCalledWith('test value')
  })

  it('renders search suggestions when suggestions prop exists', () => {
    const suggestions = [
      { title: 'Suggestion 1', onClick: jest.fn() },
      { title: 'Suggestion 2', onClick: jest.fn() },
    ]

    render(<PktSearchInput id="test-search-input" suggestions={suggestions} />)

    // Check if suggestion elements are rendered
    suggestions.forEach((suggestion) => {
      expect(screen.getByText(suggestion.title)).toBeInTheDocument()
    })
  })

  describe('accessibility', () => {
    it('renders with no wcag errors with axe', async () => {
      const suggestions = [
        { title: 'Suggestion 1', onClick: jest.fn() },
        { title: 'Suggestion 2', onClick: jest.fn() },
      ]
      const { container } = render(
        <PktSearchInput id="test-search-input" label="My label" suggestions={suggestions} />,
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
