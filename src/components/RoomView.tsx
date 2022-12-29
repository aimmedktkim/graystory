import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RoomViewProps} from '../types/RoomViewProps';

const RoomView = (props: RoomViewProps) => {
    useEffect(() => {
        console.log('RoomView');
    }, []);

    return (
        <View style={[styles.container]}>
            <Text style={[styles.textContent]}>{props.text}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    textContent: {
        flex: 1,
        fontSize: 24,
        alignSelf: 'center',
    },
});

export default RoomView;
