import '@testing-library/jest-dom/extend-expect'

import { fireEvent, render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import React from 'react'

import { PktHeader } from './Header'

expect.extend(toHaveNoViolations)

describe('PktHeader', () => {
  const mockUser = {
    name: 'John Doe',
    shortname: 'JD',
    lastLoggedIn: '2023-08-20T12:34:56Z',
  }

  const mockUserMenu = [
    { title: 'Profile', target: '/profile', iconName: 'profile' },
    { title: 'Settings', target: '/settings', iconName: 'settings' },
  ]

  const mockRepresenting = {
    name: 'Org Name',
    shortname: 'ON',
    orgNumber: '123456789',
  }

  const mockUserMenuFooter = [{ title: 'Help', target: '/help' }]

  it('renders header with default props', () => {
    render(<PktHeader />)
    // Add assertions to check the presence of certain elements or classes
    expect(screen.getByTestId('pkt-header')).toBeInTheDocument()
  })

  it('renders user menu when user is present', () => {
    render(<PktHeader user={mockUser} userMenu={mockUserMenu} />)
    const userButton = screen.getByRole('button', { name: 'John Doe JD' })
    fireEvent.click(userButton)
    // Add assertions to check if user menu items are displayed
    expect(screen.getByText('Profile')).toBeInTheDocument()
    expect(screen.getByText('Settings')).toBeInTheDocument()
  })

  it('renders representing organization when representing is present', () => {
    render(<PktHeader representing={mockRepresenting} />)
    // Add assertions to check if representing organization info is displayed
    expect(screen.getAllByText('Org Name')[1]).toBeInTheDocument()
    expect(screen.getByText('Org.nr. 123456789')).toBeInTheDocument()
  })

  it('calls logOut function when Log Out button is clicked', () => {
    const mockLogOut = jest.fn()
    render(<PktHeader showLogOutButton logOut={mockLogOut} />)
    const logOutButton = screen.getByRole('button', { name: 'Logg ut' })
    fireEvent.click(logOutButton)
    expect(mockLogOut).toHaveBeenCalled()
  })

  it('toggles user menu when user button is clicked', () => {
    render(
      <PktHeader user={mockUser} userMenu={mockUserMenu} userMenuFooter={mockUserMenuFooter} />,
    )
    const userButton = screen.getByRole('button', { name: 'John Doe JD' })
    fireEvent.click(userButton)
    // Add assertions to check if user menu is open
    expect(screen.getByTestId('usermenu').classList.contains('pkt-header--open-dropdown')).toBe(
      true,
    )
    fireEvent.click(userButton)
    // Add assertions to check if user menu is closed
    expect(screen.getByTestId('usermenu').classList.contains('pkt-header--open-dropdown')).toBe(
      false,
    )
  })

  describe('accessibility', () => {
    it('renders with no wcag errors with axe', async () => {
      const { container } = render(
        <PktHeader user={mockUser} userMenu={mockUserMenu} userMenuFooter={mockUserMenuFooter} />,
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })

  describe('snapshot', () => {
    it('renders correctly with all props', () => {
      const { container } = render(
        <PktHeader
          user={mockUser}
          userMenu={mockUserMenu}
          userMenuFooter={mockUserMenuFooter}
          representing={mockRepresenting}
        />,
      )
      expect(container).toMatchSnapshot()
    })
  })
})
