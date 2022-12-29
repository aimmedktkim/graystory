import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View, ScrollView, FlatList, SafeAreaView, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getPlainDataFromAddress, getPlayDataFromAddress, setSavePoint } from '../services/PlayDataService'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../ducks';
import { toAddress } from '../ducks/PlaySlice';
import { PlainGameData } from "../datas/PlainGameData";

const MainScreen = ({ navigation }) => {

    // 리듀서 쓰기
    const dispatch = useDispatch();

    // 처음 시작 할 때 한번만 취득하기
    useEffect(() => {

        const setData = async () => {

            console.log(await AsyncStorage.getAllKeys())
            let nextAddress = ''
            // 세이브 데이터가 있는지 체크한다.
            const savePoint = await AsyncStorage.getItem('save_point')

            // 세이브 데이터가 없으면 전체 데이터를 세팅한다.
            if (savePoint === null || savePoint === '') {
                console.log('세이브 데이터 없음')
                // 첫 스토리를 세이브 데이터로 설정한다.
                nextAddress = 'Story0' // await setPlainGameDataAndreturnFirstAddress()

            } else {
                // 세이브 데이터가 있으면 포인트 부터 시작한다.
                console.log(`세이브 데이터 있음 : ${savePoint}`)
                nextAddress = savePoint
            }

            // 게임을 시작한다.
            await saveAndSetData(nextAddress)
        }
        setData()
    }, [])

    const goToPlay = () => {
        navigation.navigate('Play');
    }

    const reset = async () => {

        // 모든 데이터 삭제
        AsyncStorage.getAllKeys()
            .then(keys => AsyncStorage.multiRemove(keys))

        // 첫 스토리를 세이브 데이터로 설정한다.
        const nextAddress = 'Story0'
        await saveAndSetData(nextAddress)
        goToPlay()
    }

    const saveAndSetData = async (address: string) => {

        await setSavePoint(address)

        // 게임을 시작한다.
        const data = await getPlayDataFromAddress(address)

        dispatch(
            toAddress({
                data
            })
        );
    }

    return (
        <View>
            <Button onPress={goToPlay} title={`시작하기`} />
            <Button onPress={reset} title={`새로하기`} />
        </View>
    )
}

export default MainScreen;