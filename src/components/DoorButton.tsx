import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {commonStyleValues} from '../common/commonStyleValues';
import {DoorButtonProps} from '../types/DoorButtonProps';
import DoorSingleButton from './DoorSingleButton';

const DoorButton = (props: DoorButtonProps) => {
    return (
        <FlatList
            style={[styles.doorArea]}
            data={props.doors}
            renderItem={({item, index}) => (
                <DoorSingleButton data={item} doorIndex={index} onPress={props.onPress} />
            )}
        />
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
    doorArea: {
        flex: 1,
        paddingTop: commonStyleValues.contentPaddingTop,
        alignSelf: 'center',
        position: 'absolute',
    },
});

export default DoorButton;
