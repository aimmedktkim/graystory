import { PlayDataProps } from '../types/PlayDataProps'
import { SampleData } from '../datas/SampleData'
import { PlainGameData } from '../datas/PlainGameData'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { MapDataProps } from '../types/MapDataProps'

const getPlainDataFromAddress = (address: string): PlayDataProps => {
    console.log(`address : ${address}`)
    if (PlainGameData.hasOwnProperty(address)) {
        return PlainGameData[address]
    } else {
        console.log(`no data`)
        return SampleData
    }
}

const getPlayDataFromAddress = async (address: string): Promise<PlayDataProps> => {
    const e = await AsyncStorage.getItem(address)

    if (e === null || e === '') {
        if (PlainGameData.hasOwnProperty(address)) {
            return PlainGameData[address]
        } else {
            console.log(`getPlayDataFromAddress no data from ${address}`)
            return SampleData
        }
    } else {
        // 분해하기
        const temp = await JSON.parse(e)
        const o = {
            nextAddress: temp.nextAddress,
            isClear: temp.isClear,
            category: temp.category,
            roomName: temp.roomName,
            address: temp.address,
            text: temp.text,
            objects: temp.objects,
            doors: temp.doors,
        }
        console.log(`getPlayDataFromAddress : ${o.address}`)
        return o
    }
}

const setPlayData = async (data: PlayDataProps) => {
    console.log(`setPlayData data : ${JSON.stringify(data)}`)
    await AsyncStorage.setItem(data.address, JSON.stringify(data))
    console.log(await AsyncStorage.getAllKeys())
}

const setSavePoint = async (address: string) => {
    await AsyncStorage.setItem('save_point', address)
}

const getMapData = async (): Promise<MapDataProps> => {
    const temp = await AsyncStorage.getItem('maps')
    if (temp !== null && temp !== '') {
        return await JSON.parse(temp)
    } else {
        return { list: [] }
    }
}

const setMapData = async (data: Array<string>) => {
    const d = await AsyncStorage.getItem('maps')
    if (d !== null && d !== '') {
        const temp: MapDataProps = await JSON.parse(d)
        const tempArr = temp.list
        let flag = true

        for (let i = 0; i < tempArr.length; i++) {
            if (tempArr[i][1] === data[1]) {
                flag = false
                break
            }
        }

        if (flag) {
            temp[`list`].push(data)
        }

        await AsyncStorage.setItem('maps', JSON.stringify(temp))
        console.log(`maps: ${await AsyncStorage.getItem('maps')}`)
    } else {
        await AsyncStorage.setItem('maps', JSON.stringify({ list: [data] }))
    }
}

export { getPlayDataFromAddress, getPlainDataFromAddress, setPlayData, setSavePoint, getMapData, setMapData }
