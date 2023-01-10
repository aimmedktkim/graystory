import React from 'react';
import {Text} from 'react-native';
import {render} from '@testing-library/react-native';

const TestScreen = () => {
    test('renders text', () => {
        const {getByText} = render(<Text>Hello, world!</Text>);
        expect(getByText('Hello, world!')).toBeTruthy();
    });

    return null;
};

export default TestScreen;
