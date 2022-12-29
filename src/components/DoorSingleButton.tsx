import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../ducks';
import { clickDoor } from '../ducks/PlaySlice';
import { DoorSingleButtonProps } from '../types/DoorSingleButtonProps';

const DoorSingleButton = (props: DoorSingleButtonProps) => {

    const dispatch = useDispatch();

    return (
        <Pressable
            onPress={() => {
                console.log(`props.doorIndex : ${props.doorIndex}`)
                dispatch(
                    clickDoor({
                        // door: props.data,
                        doorIndex: props.doorIndex
                    })
                );
            }}
            style={({ pressed }) => [
                {
                    backgroundColor: pressed
                        ? 'rgb(210, 230, 255)'
                        : 'white'
                },
                styles.wrapperCustom
            ]}>
            <Text
                style={
                    styles.text
                }>
                {props.data.title}
            </Text>
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
        padding: 6
    },
});

export default DoorSingleButton;