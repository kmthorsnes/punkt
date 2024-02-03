import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe'
import React, { createRef } from 'react';

import { PktButton } from './Button';

expect.extend(toHaveNoViolations)

test('forwardRef works correctly', () => {
  const ref = createRef<HTMLButtonElement>();
  render(<PktButton ref={ref}>Click me</PktButton>);

  // Simulate a click on the button
  userEvent.click(screen.getByText('Click me'));

  // Check that the ref actually points to the button element
  expect(ref.current).toBe(screen.getByRole('button'));
});

describe('accessibility', () => {
    it('renders with no wcag errors with axe', async () => {
      const { container } = render(<PktButton title="Normal" skin="primary"></PktButton>)
      const results = await axe(container)

      expect(results).toHaveNoViolations()
    })
  })
