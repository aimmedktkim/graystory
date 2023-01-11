import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {commonStyleValues} from '../common/commonStyleValues';
import {ContentSingleButtonProps} from '../types/ContentSingleButtonProps';

const ContentSingleButton = (props: ContentSingleButtonProps) => {
    return (
        <Pressable
            onPress={() => {
                props.onPress(props.objectIndex);
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
        fontSize: commonStyleValues.textFontSize,
        alignSelf: 'center',
    },
    wrapperCustom: {
        flex: 1,
        borderRadius: 8,
        padding: 6,
    },
});

export default ContentSingleButton;
