import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe'
import { BrowserRouter as Router } from 'react-router-dom';

import { PktBreadcrumbs } from './Breadcrumbs';

expect.extend(toHaveNoViolations)

describe('PktBreadcrumbs Component', () => {
    const breadcrumbs = [
        { text: 'Home', href: '/' },
        { text: 'Products', href: '/products' },
        { text: 'Item', href: '/products/item' },
    ];

    it('renders breadcrumbs correctly with react-router navigation', () => {
        const { getAllByText } = render(
            <Router>
                <PktBreadcrumbs breadcrumbs={breadcrumbs} navigationType="router" />
            </Router>
        );

        expect(getAllByText('Home')).toBeTruthy();
        expect(getAllByText('Products')).toBeTruthy();
        expect(getAllByText('Item')).toBeTruthy();
    });

    it('renders breadcrumbs correctly with anchor navigation', () => {
        const { getAllByText } = render(<PktBreadcrumbs breadcrumbs={breadcrumbs} navigationType="anchor" />);

        expect(getAllByText('Home')).toBeTruthy();
        expect(getAllByText('Products')).toBeTruthy();
        expect(getAllByText('Item')).toBeTruthy();
    });

    it('renders back link correctly on mobile with router navigation', () => {
        const { getAllByText } = render(
            <Router>
                <PktBreadcrumbs breadcrumbs={breadcrumbs} navigationType="router" />
            </Router>
        );

        expect(getAllByText('Home')).toBeTruthy();
        expect(getAllByText('Products')).toBeTruthy();
        expect(getAllByText('Item')).toBeTruthy();
    });

    it('renders back link correctly on mobile with anchor navigation', () => {
        const { getAllByText } = render(<PktBreadcrumbs breadcrumbs={breadcrumbs} navigationType="anchor" />);

        expect(getAllByText('Home')).toBeTruthy();
        expect(getAllByText('Products')).toBeTruthy();
        expect(getAllByText('Item')).toBeTruthy();
    });

    it('renders with no wcag errors with axe', async () => {
        const { container } = render(<PktBreadcrumbs breadcrumbs={breadcrumbs} navigationType="anchor" />)
        const results = await axe(container)

        expect(results).toHaveNoViolations()
    })
});

