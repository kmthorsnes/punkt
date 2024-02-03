
import { fireEvent, render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe'
import React, { createRef } from 'react';

import { PktAlert } from './Alert';

expect.extend(toHaveNoViolations)

describe('PktAlert', () => {

  test('ref works correctly', () => {
    const ref = createRef<HTMLDivElement>();
    const { unmount } = render(<PktAlert ref={ref}>Alert text</PktAlert>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  
    unmount();
    expect(ref.current).toBe(null);
  });

  it('calls onClose when close button is clicked', () => {
    const onClose = jest.fn();
    const { getByLabelText } = render(<PktAlert closeAlert={true} onClose={onClose}>Hello World</PktAlert>);
    fireEvent.click(getByLabelText('close'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  describe('accessibility', () => {
    it('renders with no wcag errors with axe', async () => {
      const { container } = render(<PktAlert title="Error" skin="error"></PktAlert>)
      const results = await axe(container)

      expect(results).toHaveNoViolations()
    })
  })
});


