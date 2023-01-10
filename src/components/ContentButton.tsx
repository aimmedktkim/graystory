import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import ContentSingleButton from '../components/ContentSingleButton';
import {ContentButtonProps} from '../types/ContentButtonProps';

const ContentButton = (props: ContentButtonProps) => {
    return (
        <FlatList
            style={[styles.objectArea]}
            data={props.objects}
            renderItem={({item, index}) => (
                <ContentSingleButton data={item} objectIndex={index} onPress={props.onPress} />
            )}
        />
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
    objectArea: {
        marginTop: 20,
        height: '80%',
        width: '100%',
        alignSelf: 'center',
        position: 'absolute',
    },
});

export default ContentButton;
