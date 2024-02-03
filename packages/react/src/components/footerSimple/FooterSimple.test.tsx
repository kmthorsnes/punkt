// Test med axe https://www.npmjs.com/package/jest-axe
import '@testing-library/jest-dom/extend-expect';

import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

import { PktFooterSimple } from './FooterSimple'

expect.extend(toHaveNoViolations)



describe('PktFooterSimple', () => {

  const links = [
    { href: 'https://www.example.com', text: 'Example Link 1' },
    { href: 'https://www.example.com', text: 'Example Link 2' },
    { href: 'https://www.example.com', text: 'Example Link 3' },
  ];

  describe('basic rendering', () => {
    it('renders a list of links', () => {
      const { getByText } = render(<PktFooterSimple links={links} />);
      links.forEach((link) => {
        expect(getByText(link.text)).toBeInTheDocument();
        expect(getByText(link.text).getAttribute('href')).toEqual(link.href);
      });
    });

    it('renders an external link with an external class', () => {
      const links = [
        { href: 'https://www.example.com', text: 'Example Link', external: true },
      ];
      const { getByText } = render(<PktFooterSimple links={links} />);
      expect(getByText(links[0].text)).toHaveClass('pkt-link--external');
    });

    it('renders a privacy link', () => {
      const { getByText } = render(<PktFooterSimple />);
      expect(getByText('Personvern og informasjonskapsler')).toBeInTheDocument();
      expect(getByText('Personvern og informasjonskapsler').getAttribute('href')).toEqual('https://www.oslo.kommune.no/personvern-og-informasjonskapsler/');
    });

    it('renders an accessibility link', () => {
      const { getByText } = render(<PktFooterSimple />);
      expect(getByText('Tilgjengelighet')).toBeInTheDocument();
      expect(getByText('Tilgjengelighet').getAttribute('href')).toEqual('https://www.oslo.kommune.no/tilgjengelighet/');
    });
  })

  describe('accessibility', () => {
    it('renders with no wcag errors with axe', async () => {
      const { container } = render(<PktFooterSimple links={links} />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    })
  })

  describe('snapshot', () => {
    it('renders correctly with all props', () => {
      const { container } = render(<PktFooterSimple links={links} />);
      expect(container).toMatchSnapshot();
    })
  })
});
