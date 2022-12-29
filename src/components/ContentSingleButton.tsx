import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ContentSingleButtonProps } from "../types/ContentSingleButtonProps"
import { useDispatch, useSelector } from "react-redux";
import { clickObject } from '../ducks/PlaySlice';


const ContentSingleButton = (props: ContentSingleButtonProps) => {

    const dispatch = useDispatch();

    return (

        <Pressable
            onPress={() => {
                dispatch(
                    clickObject({
                        objectIndex: props.objectIndex,
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

export default ContentSingleButton;