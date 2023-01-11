import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {contentFocus, mainFocus} from '../ducks/PlaySlice';

const InterfaceButton = () => {
    const dispatch = useDispatch();

    return (
        <View style={[styles.container]}>
            <Pressable
                onPress={() => {
                    dispatch(
                        mainFocus({
                            mainFocus: 0,
                        }),
                    );
                    dispatch(
                        contentFocus({
                            contentFocus: 0,
                        }),
                    );
                }}
                style={({pressed}) => [
                    {
                        backgroundColor: pressed ? '#ffddff' : 'white',
                    },
                    styles.wrapperCustom,
                ]}
            >
                {({}) => <Text style={styles.text}>Room</Text>}
            </Pressable>

            <Pressable
                onPress={() => {
                    dispatch(
                        contentFocus({
                            contentFocus: 1,
                        }),
                    );
                }}
                style={({pressed}) => [
                    {
                        backgroundColor: pressed ? '#ffddff' : 'white',
                    },
                    styles.wrapperCustom,
                ]}
            >
                {({}) => <Text style={styles.text}>Objects</Text>}
            </Pressable>

            <Pressable
                onPress={() => {
                    dispatch(
                        contentFocus({
                            contentFocus: 2,
                        }),
                    );
                }}
                style={({pressed}) => [
                    {
                        backgroundColor: pressed ? '#ffddff' : 'white',
                    },
                    styles.wrapperCustom,
                ]}
            >
                {({}) => <Text style={styles.text}>Doors</Text>}
            </Pressable>

            {/* <Pressable
                onPress={() => {
                    dispatch(
                        contentFocus({
                            contentFocus: 3,
                        }),
                    );
                }}
                style={({pressed}) => [
                    {
                        backgroundColor: pressed ? '#ffddff' : 'white',
                    },
                    styles.wrapperCustom,
                ]}
            >
                {({}) => <Text style={styles.text}>Keywords</Text>}
            </Pressable> */}

            <Pressable
                onPress={() => {
                    dispatch(
                        contentFocus({
                            contentFocus: 4,
                        }),
                    );
                }}
                style={({pressed}) => [
                    {
                        backgroundColor: pressed ? '#ffddff' : 'white',
                    },
                    styles.wrapperCustom,
                ]}
            >
                {({}) => <Text style={styles.text}>Maps</Text>}
            </Pressable>

            <Pressable
                onPress={() => {
                    dispatch(
                        contentFocus({
                            contentFocus: 5,
                        }),
                    );
                }}
                style={({pressed}) => [
                    {
                        backgroundColor: pressed ? '#ffddff' : 'white',
                    },
                    styles.wrapperCustom,
                ]}
            >
                {({}) => <Text style={styles.text}>Settings</Text>}
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    text: {
        fontSize: 12,
        alignSelf: 'center',
    },
    wrapperCustom: {
        flex: 1,
        borderColor: '#f0aaaa',
        borderWidth: 1,
        padding: 6,
        alignSelf: 'center',
    },
});

export default InterfaceButton;
