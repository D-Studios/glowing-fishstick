// 1) Testing React Native Components
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import MyComponent from '../MyComponent';

describe('<MyComponent />', () => {
    it('changes text when button is pressed', () => {
        // Render the component
        const { getByText } = render(<MyComponent />);

        // Check initial text
        expect(getByText('Hello, World!')).toBeTruthy();

        // Find the button and press it
        const button = getByText('Press me');
        fireEvent.press(button);

        // Check updated text
        expect(getByText('Button pressed!')).toBeTruthy();
    });
});
