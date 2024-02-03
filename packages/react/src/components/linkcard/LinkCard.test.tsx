// Test med axe https://www.npmjs.com/package/jest-axe
import '@testing-library/jest-dom/extend-expect';

import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import * as React from 'react'

import { PktLinkCard } from './LinkCard'

expect.extend(toHaveNoViolations)



describe('PktLinkCard', () => {

  describe('basic rendering', () => {

    it('renders with title and content', () => {
      const { getByRole, getByText } = render(
        <PktLinkCard title="Link title" href="/example">
          Link content
        </PktLinkCard>
      )

      expect(getByRole('link')).toHaveAttribute('href', '/example')
      expect(getByText('Link title')).toBeInTheDocument()
      expect(getByText('Link content')).toBeInTheDocument()
    })

    it('renders a link with the correct href', () => {
      const href = 'https://www.example.com'
      const { getByRole } = render(<PktLinkCard href={href}>Link content</PktLinkCard>)
      const linkElement = getByRole('link')
      expect(linkElement).toHaveAttribute('href', href)
    })

  })

  describe('skins', () => {
    it('renders with different skins', () => {
      const { container } = render(
        <div>
          <PktLinkCard title="Normal" skin="normal" />
          <PktLinkCard title="Blue" skin="blue" />
          <PktLinkCard title="Beige" skin="beige" />
          <PktLinkCard title="Beige outline" skin="beige-outline" />
          <PktLinkCard title="Grey outline" skin="grey-outline" />
        </div>
      )

      expect(container.querySelectorAll('.pkt-linkcard--normal')).toHaveLength(1)
      expect(container.querySelectorAll('.pkt-linkcard--blue')).toHaveLength(1)
      expect(container.querySelectorAll('.pkt-linkcard--beige')).toHaveLength(1)
      expect(container.querySelectorAll('.pkt-linkcard--beige-outline')).toHaveLength(1)
      expect(container.querySelectorAll('.pkt-linkcard--grey-outline')).toHaveLength(1)
    })
  })

  describe('accessibility', () => {
    it('renders with no wcag errors with axe', async () => {
      const { container } = render(<PktLinkCard title="Normal" skin="normal"></PktLinkCard>)
      const results = await axe(container)

      expect(results).toHaveNoViolations()
    })
  })

  describe('snapshots', () => {
    it('renders correctly as fragment with props', () => {
      const { asFragment } = render(
        <PktLinkCard title="Link title" href="/example">
          Link content
        </PktLinkCard>
      )
      expect(asFragment()).toMatchSnapshot()
    })
  })

})
