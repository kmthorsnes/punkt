import '@testing-library/jest-dom/extend-expect'

import { fireEvent, render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

import { PktCheckbox } from './Checkbox'

expect.extend(toHaveNoViolations)

describe('PktCheckbox', () => {
  // Test case for rendering a basic checkbox
  it('renders a basic checkbox with label', () => {
    const { getByLabelText } = render(<PktCheckbox id="myCheckbox" label="My Checkbox" />)

    // Check if the label is present in the document
    const checkboxLabel = getByLabelText('My Checkbox')
    expect(checkboxLabel).toBeInTheDocument()
  })

  it('renders an error state checkbox', () => {
    render(<PktCheckbox id="myCheckbox" label="My Checkbox" hasError />)
    const checkbox = screen.getByRole('checkbox', { name: 'My Checkbox' })

    // Verify that the error class is applied to the checkbox
    expect(checkbox).toHaveClass('pkt-input-check__input-checkbox--error')
  })

  it('renders as Switch', () => {
    render(<PktCheckbox id="myCheckbox" label="My Checkbox" isSwitch />)
    const checkbox = screen.getByRole('switch', { name: 'My Checkbox' })

    // Verify that the error class is applied to the checkbox
    expect(checkbox).toHaveAttribute('role', 'switch')
  })

  test('renders a default checked checkbox', () => {
    const { getByRole } = render(
      <PktCheckbox id="myCheckbox" label="My Checkbox" defaultChecked={true} />,
    )
    // Find the checkbox element by its "checkbox" role
    const checkbox = getByRole('checkbox') as HTMLInputElement
    // Verify that the checkbox is initially checked
    expect(checkbox).toBeChecked()
  })

  test('handles onClick callback', () => {
    const onClickMock = jest.fn()
    const { getByLabelText } = render(
      <PktCheckbox id="myCheckbox" label="My Checkbox" onClick={onClickMock} />,
    )

    // Get the checkbox label element
    const checkboxLabel = getByLabelText('My Checkbox')

    // Simulate a click event on the checkbox label
    fireEvent.click(checkboxLabel)

    // Verify that the onClick callback is called
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })

  describe('accessibility', () => {
    it('renders with no wcag errors with axe', async () => {
      const { container } = render(
        <PktCheckbox id="accessibilityTest" label="My checkkbox"></PktCheckbox>,
      )
      const results = await axe(container)

      expect(results).toHaveNoViolations()
    })
  })
})
