import React, { useEffect, useState } from 'react'
import { Pressable, StyleSheet, Text, View, ScrollView, FlatList, SafeAreaView, TextInput, Button } from 'react-native'
import { DoorViewProps } from '../types/DoorViewProps'
import { useDispatch, useSelector } from 'react-redux'
import { toAddress } from '../ducks/PlaySlice'
import { getPlayDataFromAddress, setMapData, setPlayData, setSavePoint } from '../services/PlayDataService'
import { PlayDataProps } from '../types/PlayDataProps'
import { SampleData } from '../datas/SampleData'
import { RootState } from '../ducks'

// 정답과 다음데이터 주소를 전달해줘야 한다.
const DoorView = (props: DoorViewProps) => {
    const door = props.data.doors[props.index]
    const id = props.data.doors[props.index].id
    const [text, onChangeText] = useState('')
    const [data, setData] = useState<PlayDataProps>(SampleData)

    // let data: PlayDataProps = SampleData

    useEffect(() => {
        const settings = async () => {
            console.log(`props.data.nextAddress : ${door.nextAddress}`)
            await getPlayDataFromAddress(door.nextAddress)
                .then(e => {
                    setData(e)
                })
                .catch()
        }
        settings()
    }, [])

    // 리듀서 쓰기
    const dispatch = useDispatch()

    const f = useSelector((state: RootState) => state.PlaySlice)

    const checkAnswer = async () => {
        // 답이 맞거나 그냥 통과하는 문이면 다음 주로소 이동.
        if (text === door.answer || !door.isLock) {
            // 다음 주소를 시작
            dispatch(
                toAddress({
                    data,
                }),
            )

            await setSavePoint(data.address)
            await setMapData([data.roomName, data.address])
        }
    }

    return (
        <View style={[styles.container]}>
            <Text style={[styles.textContent]}>{door.content}</Text>
            {door.isLock ? <TextInput style={styles.input} onChangeText={onChangeText} value={text} /> : null}

            <Button
                title="next"
                onPress={() => {
                    checkAnswer()
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    textContent: {
        flex: 1,
        fontSize: 40,
        alignSelf: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
})

export default DoorView
