import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import '@testing-library/jest-dom'
import { PktTabs } from './Tabs'

expect.extend(toHaveNoViolations)

describe('Tabs component', () => {
  const tabs = [
    { text: 'Tab 1', href: '#', action: jest.fn() },
    { text: 'Tab 2', action: jest.fn() },
  ]

  it('renders tabs with links and buttons', () => {
    const { getByText } = render(<PktTabs tabs={tabs} />)
    tabs.forEach((tab) => {
      const tabElement = getByText(tab.text)
      expect(tabElement).toBeInTheDocument()
      if (tab.href) {
        expect(tabElement.tagName).toBe('A')
      } else {
        expect(tabElement.tagName).toBe('BUTTON')
      }
    })
  })

  it('calls action function when a tab is clicked', () => {
    const { getByText } = render(<PktTabs tabs={tabs} />)
    tabs.forEach((tab, index) => {
      const tabElement = getByText(tab.text)
      fireEvent.click(tabElement)
      expect(tab.action).toHaveBeenCalledWith(index)
    })
  })

  it('calls onTabSelected prop when a tab is clicked', () => {
    const onTabSelected = jest.fn()
    const { getByText } = render(<PktTabs tabs={tabs} onTabSelected={onTabSelected} />)
    tabs.forEach((tab, index) => {
      const tabElement = getByText(tab.text)
      fireEvent.click(tabElement)
      expect(onTabSelected).toHaveBeenCalledWith(index)
    })
  })
  describe('accessibility', () => {
    it('renders with no wcag errors with axe', async () => {
      const tabs = [
        { text: 'Tab 1', href: '/page1', action: jest.fn() },
        { text: 'Tab 2', action: jest.fn() },
      ]
      const { container } = render(<PktTabs tabs={tabs} />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
