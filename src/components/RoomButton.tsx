import React from 'react'
import { Pressable, StyleSheet, FlatList } from 'react-native'
import { RoomButtonProps } from '../types/RoomButtonProps'
import RoomSingleButton from './RoomSingleButton'

const RoomButton = (props: RoomButtonProps) => {
    return (
        <FlatList
            style={[styles.objectArea]}
            data={props.data}
            renderItem={({ item, index }) => <RoomSingleButton data={item} roomIndex={index} />}
        />
    )
}

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
})

export default RoomButton
