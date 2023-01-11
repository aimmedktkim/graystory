import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {commonStyleValues} from '../common/commonStyleValues';
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
        marginTop: commonStyleValues.contentMarginTop,
        height: '80%',
        width: commonStyleValues.contentWidth,
        alignSelf: 'center',
        position: 'absolute',
    },
});

export default ContentButton;
