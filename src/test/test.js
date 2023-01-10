import React from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {render, screen, fireEvent} from '@testing-library/react-native';

const TestComponent = () => {
    return (
        <View>
            <Text>Hello, world2!</Text>
            <Text>Hello, world!</Text>
            <Text>Hello, world3!</Text>
        </View>
    );
};

test('renders text', () => {
    const {getByText} = render(<TestComponent />);
    expect(getByText('Hello, world3!')).toBeTruthy();
});

// test('renders text2', () => {
//     const {getByText} = render(<Text>Hello, world!</Text>);
//     expect(getByText('Hello, world!')).toBeTruthy();
// });

test('1 is 1', () => {
    expect(1).toBe(1);
});

function getUser(id) {
    return {
        id,
        email: `user${id}@test.com`,
    };
}

test('return a user object', () => {
    expect(getUser(1)).toEqual({
        id: 1,
        email: `user1@test.com`,
    });
});

function findUser(id) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log('waited 0.1 sec.');
            const user = {
                id: id,
                name: 'User' + id,
                email: id + '@test.com',
            };
            resolve(user);
        }, 100);
    });
}

test('fetch a user', () => {
    return findUser(1).then(user => {
        expect(user).toEqual({
            id: 1,
            name: 'User1',
            email: '1@test.com',
        });
    });
});

const fetchData = cb => {
    cb('peanut butter');
};

test('the data is peanut butter', done => {
    function callback(data) {
        try {
            expect(data).toBe('peanut butter');
            done();
        } catch (error) {
            done(error);
        }
    }

    fetchData(callback);
});

function Example() {
    const [name, setUser] = React.useState('');
    const [show, setShow] = React.useState(false);

    return (
        <View>
            <TextInput value={name} onChangeText={setUser} testID='input' />
            <Button
                title='Print Username'
                onPress={() => {
                    // let's pretend this is making a server request, so it's async
                    // (you'd want to mock this imaginary request in your unit tests)...
                    setTimeout(() => {
                        setShow(true);
                    }, Math.floor(Math.random() * 200));
                }}
            />
            {show && <Text testID='printed-username'>{name}</Text>}
        </View>
    );
}

test('examples of some things', async () => {
    const expectedUsername = 'Ada Lovelace';

    render(<Example />);

    fireEvent.changeText(screen.getByTestId('input'), expectedUsername);
    fireEvent.press(screen.getByText('Print Username'));

    // Using `findBy` query to wait for asynchronous operation to finish
    const usernameOutput = await screen.findByTestId('printed-username');

    // Using `toHaveTextContent` matcher from `@testing-library/jest-native` package.
    // expect(usernameOutput).toHaveTextContent(expectedUsername);

    expect(screen.toJSON()).toMatchSnapshot();
});
