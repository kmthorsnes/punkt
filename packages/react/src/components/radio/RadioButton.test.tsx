import '@testing-library/jest-dom/extend-expect';

import { fireEvent, render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe'

import { PktRadioButton } from './RadioButton';

expect.extend(toHaveNoViolations)

describe('PktRadiobutton', () => {
    // Test case for rendering a basic radiogroup
    it('renders without errors', () => {
        const { getByLabelText } = render(
            <div>
                <PktRadioButton id="radio1" name="radioGroup" label="Option 1" value="option1" />
                <PktRadioButton id="radio2" name="radioGroup" label="Option 2" value="option2" />
            </div>
        );

        expect(getByLabelText('Option 1')).toBeTruthy();
        expect(getByLabelText('Option 2')).toBeTruthy();
    });

    it('allows selecting one option from the group', () => {
        const { getByLabelText } = render(
            <div>
                <PktRadioButton id="radio1" name="radioGroup" label="Option 1" value="option1" />
                <PktRadioButton id="radio2" name="radioGroup" label="Option 2" value="option2" />
            </div>
        );

        const option1 = getByLabelText('Option 1') as HTMLInputElement;
        const option2 = getByLabelText('Option 2') as HTMLInputElement;

        fireEvent.click(option1);
        expect(option1.checked).toBe(true);
        expect(option2.checked).toBe(false);

        fireEvent.click(option2);
        expect(option1.checked).toBe(false);
        expect(option2.checked).toBe(true);
    });


    describe('accessibility', () => {
        it('renders with no wcag errors with axe', async () => {
            const { container } = render(<PktRadioButton name="accessibilitytest" id="accessibilityTest" label="My checkkbox" />)
            const results = await axe(container)

            expect(results).toHaveNoViolations()
        })
    })
})
