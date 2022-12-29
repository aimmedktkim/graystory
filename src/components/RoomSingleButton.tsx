import React, { useEffect, useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { clickObject, toAddress } from '../ducks/PlaySlice'
import { getPlayDataFromAddress } from '../services/PlayDataService'
import { RoomSingleButtonProps } from '../types/RoomSingleButtonProps'

const RoomSingleButton = (props: RoomSingleButtonProps) => {
    const dispatch = useDispatch()

    const goToAddress = async () => {
        // 데이터 받아오기
        const data = await getPlayDataFromAddress(props.data[1])

        dispatch(
            toAddress({
                data,
            }),
        )
    }

    return (
        <Pressable
            onPress={() => {
                goToAddress()
            }}
            style={({ pressed }) => [
                {
                    backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
                },
                styles.wrapperCustom,
            ]}
        >
            <Text style={styles.text}>{props.data[0]}</Text>
        </Pressable>
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
})

export default RoomSingleButton
