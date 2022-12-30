import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Button from './Button';

test('button press', () => {
    const onPress = jest.fn();
    const {getByText} = render(<Button title='Press me' onPress={onPress} />);
    const button = getByText('Press me');

    fireEvent.press(button);
    expect(onPress).toHaveBeenCalled();
});
