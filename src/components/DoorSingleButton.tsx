import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {DoorSingleButtonProps} from '../types/DoorSingleButtonProps';

const DoorSingleButton = (props: DoorSingleButtonProps) => {
    return (
        <Pressable
            onPress={() => {
                console.log(`props.doorIndex : ${props.doorIndex}`);
                props.onPress(props.doorIndex);
            }}
            style={({pressed}) => [
                {
                    backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
                },
                styles.wrapperCustom,
            ]}
        >
            <Text style={styles.text}>{props.data.title}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        alignSelf: 'center',
    },
    wrapperCustom: {
        flex: 1,
        borderRadius: 8,
        padding: 6,
    },
});

export default DoorSingleButton;
