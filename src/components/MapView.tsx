import React, {useEffect, useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {getMapData} from '../services/PlayDataService';
import {MapDataProps} from '../types/MapDataProps';
import RoomSingleButton from './RoomSingleButton';

// 정답과 다음데이터 주소를 전달해줘야 한다.
const MapView = () => {
    const [data, setData] = useState<MapDataProps>({list: []});

    useEffect(() => {
        const settings = async () => {
            await getMapData()
                .then(e => {
                    setData(e);
                })
                .catch();
        };
        settings();
    }, []);

    return (
        <View style={[styles.container]}>
            <FlatList style={[styles.mapArea]} data={data.list} renderItem={({item, index}) => <RoomSingleButton data={item} roomIndex={index} />} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // Try setting `flexDirection` to `"row"`.
        // flexDirection: "column"
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
    mainText: {
        flex: 1,
        width: '80%',
        paddingTop: 20,
        fontSize: 30,
        alignSelf: 'center',
    },
    image: {
        flex: 1,
        alignSelf: 'center',
    },
    mapArea: {
        flex: 1,
        paddingTop: 20,
        alignSelf: 'center',
        position: 'absolute',
    },
});

export default MapView;
