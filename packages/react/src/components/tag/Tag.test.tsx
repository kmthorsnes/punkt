import '@testing-library/jest-dom/extend-expect';

import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe'
import React, { createRef } from 'react';

import { PktTag } from './Tag'

expect.extend(toHaveNoViolations)


jest.mock('../icon/Icon', () => ({
    PktIcon: ({ className, ...props }: { className: string }) => (
        <span className={`pkt-tag__icon ${className}`} {...props} data-testid="mocked-pkt-icon" />
    ),
}));

describe('PktTag', () => {

    describe('basic rendering', () => {

        it('renders correctly without any props', () => {
            const { getByText } = render(<PktTag>Hello</PktTag>);
            expect(getByText('Hello')).toBeInTheDocument();
        });

        it('renders an icon when iconName prop is provided', () => {
            render(<PktTag iconName="user">Tag with Icon</PktTag>);
            const iconElement = screen.getByTestId('mocked-pkt-icon');
            expect(iconElement).toBeInTheDocument();
        });

        it('renders with the specified skin and size', () => {
            const { container } = render(
                <PktTag skin="red" size="small">
                    Tag
                </PktTag>
            );
            expect(container.firstChild).toHaveClass('pkt-tag--red');
            expect(container.firstChild).toHaveClass('pkt-tag--small');
        });

        it('forwardRef works correctly', () => {
            const ref = createRef<HTMLButtonElement>();
            render(<PktTag closeTag={true} ref={ref}>Click me</PktTag>);

            // Simulate a click on the button
            userEvent.click(screen.getByText('Click me'));

            // Check that the ref actually points to the button element
            expect(ref.current).toBe(screen.getByRole('button'));
        });

        it('closes the tag when the close button is clicked', () => {
            const { getByLabelText, queryByText } = render(
                <PktTag closeTag={true}>Closeable Tag</PktTag>
            );
            expect(queryByText('Closeable Tag')).toBeInTheDocument();
            fireEvent.click(getByLabelText('close'));
            expect(queryByText('Closeable Tag')).not.toBeInTheDocument();
        });
    });

    describe('accessibility', () => {
        it('renders with no wcag errors with axe', async () => {
            const { container } = render(<PktTag skin="red" size="small" iconName="user" closeTag={true}>Tag</PktTag>);
            const results = await axe(container);
            expect(results).toHaveNoViolations();
        })
    });

    describe('snapshot', () => {
        it('renders correctly with all props', () => {
            const { container } = render(<PktTag skin="red" size="small" iconName="user" closeTag={true}>Tag</PktTag>);
            expect(container).toMatchSnapshot();
        })
    })
});
