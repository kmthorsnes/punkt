
import { fireEvent, render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe'

import { PktBackLink } from './BackLink';

expect.extend(toHaveNoViolations)

describe('PktBackLink', () => {
    it('renders with default text and href', () => {
        const { getByRole } = render(<PktBackLink />);

        const link = getByRole('link');
        expect(link.textContent).toBe('Forsiden');
        expect(link.getAttribute('href')).toBe('/');

    });

    it('renders with custom text and href', () => {
        const { getByRole } = render(
            <PktBackLink href="/custom-url" text="Custom Text" />
        );

        const link = getByRole('link');
        expect(link.textContent).toBe('Custom Text');
        expect(link.getAttribute('href')).toBe('/custom-url');
    });

    it('calls onClick when clicked', () => {
        const onClickMock = jest.fn();

        const { getByText } = render(
            <PktBackLink text="Back" onClick={onClickMock} />
        );

        const link = getByText('Back');
        fireEvent.click(link);

        expect(onClickMock).toHaveBeenCalledTimes(1);
    });

    describe('accessibility', () => {
        it('renders with no wcag errors with axe', async () => {
            const { container } = render(<PktBackLink text="Tilbake" href="/" />)
            const results = await axe(container)

            expect(results).toHaveNoViolations()
        })
    })
});
