// Test med axe https://www.npmjs.com/package/jest-axe
import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

import { PktFooter } from './Footer'

expect.extend(toHaveNoViolations)


describe('PktFooterSimple', () => {

  const columnOne = {
    title: 'Column One',
    links: [
      {
        href: 'https://example.com',
        text: 'Link 1',
        external: true,
      },
      {
        href: 'https://example.com',
        text: 'Link 2',
      },
    ],
    text: 'Column One Text',
  }

  const columnTwo = {
    title: 'Column Two',
    links: [
      {
        href: 'https://example.com',
        text: 'Link 3',
        external: true,
      },
      {
        href: 'https://example.com',
        text: 'Link 4',
      },
    ],
    text: 'Column Two Text',
  }

  const socialLinks = [
    {
      href: 'https://example.com',
      iconName: 'facebook',
    },
    {
      href: 'https://example.com',
      iconName: 'twitter',
    },
  ]


  describe('basic rendering', () => {
    it('should render columns and social links', () => {
      render(<PktFooter columnOne={columnOne} columnTwo={columnTwo} socialLinks={socialLinks} />)

      const columnOneElement = screen.getByText('Column One')
      expect(columnOneElement).toBeInTheDocument()

      const columnOneLink1Element = screen.getByText('Link 1')
      expect(columnOneLink1Element).toHaveAttribute('href', 'https://example.com')
      expect(columnOneLink1Element).toHaveClass('pkt-link--external')

      const columnOneLink2Element = screen.getByText('Link 2')
      expect(columnOneLink2Element).toHaveAttribute('href', 'https://example.com')
      expect(columnOneLink2Element).not.toHaveClass('pkt-link--external')

      const columnOneTextElement = screen.getByText('Column One Text')
      expect(columnOneTextElement).toBeInTheDocument()

      const columnTwoElement = screen.getByText('Column Two')
      expect(columnTwoElement).toBeInTheDocument()

      const columnTwoLink3Element = screen.getByText('Link 3')
      expect(columnTwoLink3Element).toHaveAttribute('href', 'https://example.com')
      expect(columnTwoLink3Element).toHaveClass('pkt-link--external')

      const columnTwoLink4Element = screen.getByText('Link 4')
      expect(columnTwoLink4Element).toHaveAttribute('href', 'https://example.com')
      expect(columnTwoLink4Element).not.toHaveClass('pkt-link--external')

      const columnTwoTextElement = screen.getByText('Column Two Text')
      expect(columnTwoTextElement).toBeInTheDocument()

      const personvernLink = screen.getByText('Personvern og informasjonskapsler');
      expect(personvernLink).toBeInTheDocument();

      const tilgjengelighetLink = screen.getByText('Tilgjengelighet');
      expect(tilgjengelighetLink).toBeInTheDocument();

      const socialLinksElement = screen.getByLabelText('standard lenker')
      expect(socialLinksElement).toBeInTheDocument()

      const socialLinksFacebookElement = screen.getByLabelText('til facebook')
      expect(socialLinksFacebookElement).toHaveAttribute('href', 'https://example.com')

      const socialLinksTwitterElement = screen.getByLabelText('til twitter')
      expect(socialLinksTwitterElement).toHaveAttribute('href', 'https://example.com')
    })
  })

  describe('accessibility', () => {
    it('renders with no wcag errors with axe', async () => {
      const { container } = render(<PktFooter columnOne={columnOne} columnTwo={columnTwo} socialLinks={socialLinks} />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    })
  })

  describe('snapshot', () => {
    it('renders correctly with all props', () => {
      const { container } = render(<PktFooter columnOne={columnOne} columnTwo={columnTwo} socialLinks={socialLinks} />);
      expect(container).toMatchSnapshot();
    })
  })
});
