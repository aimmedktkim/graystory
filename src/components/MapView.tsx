import React, {useEffect, useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {commonStyleValues} from '../common/commonStyleValues';
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
            <FlatList
                style={[styles.mapArea]}
                data={data.list}
                renderItem={({item, index}) => <RoomSingleButton data={item} roomIndex={index} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    mapArea: {
        flex: 1,
        marginTop: commonStyleValues.contentMarginTop,
        alignSelf: 'center',
        position: 'absolute',
    },
});

export default MapView;
