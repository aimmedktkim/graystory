import React from 'react';
import {StyleSheet, Text, View, ScrollView, Button} from 'react-native';
import InterfaceButton from '../components/InterfaceButton';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../ducks';
import DoorView from '../components/DoorView';
import ObjectView from '../components/ObjectView';
import StoryView from '../components/StoryView';
import RoomView from '../components/RoomView';
import ContentButton from '../components/ContentButton';
import DoorButton from '../components/DoorButton';
import MapView from '../components/MapView';
import {toAddress, clickObject, clickDoor} from '../ducks/PlaySlice';
import {getPlayDataFromAddress, setMapData, setSavePoint} from '../services/PlayDataService';
import Settings from '../components/Settings';
import {commonStyleValues} from '../common/commonStyleValues';

const PlayScreen = ({navigation}: any) => {
    // 리듀서 읽기
    const f = useSelector((state: RootState) => state.PlaySlice);

    // 리듀서 쓰기
    const dispatch = useDispatch();

    const gotoAddressFromAddress = async (address: string) => {
        const data = await getPlayDataFromAddress(address);
        await setSavePoint(data.address);
        if (data.category === 'room') {
            await setMapData([data.roomName, data.address]);
        }
        // console.log(`getPlayDataFromAddress(${address}) : ${JSON.stringify(data)}`);
        dispatch(
            toAddress({
                data,
            }),
        );
    };

    const onPressFromObjcetButton = (objectIndex: number) => {
        dispatch(
            clickObject({
                objectIndex,
            }),
        );
    };

    const onPressFromDoorButton = (doorIndex: number) => {
        dispatch(
            clickDoor({
                doorIndex,
            }),
        );
    };

    const mainView = [
        f.category === 'story' ? (
            <StoryView
                text={f.text}
                nextAddress={f.nextAddress}
                onPress={async () => gotoAddressFromAddress(f.nextAddress)}
            />
        ) : (
            <RoomView text={f.text} />
        ),
        f.objects.length === 0 ? null : <ObjectView data={f.objects[f.objectIndex]} />,
        f.doors.length === 0 ? null : (
            <DoorView
                data={{
                    isClear: f.isClear,
                    category: f.category,
                    roomName: f.roomName,
                    address: f.address,
                    text: f.text,
                    objects: f.objects,
                    doors: f.doors,
                    nextAddress: f.nextAddress,
                }}
                index={f.doorIndex}
                onPress={async () => gotoAddressFromAddress(f.doors[f.doorIndex].nextAddress)}
            />
        ),
    ];

    const subView = [
        null,
        <ContentButton objects={f.objects} onPress={onPressFromObjcetButton} />,
        <DoorButton doors={f.doors} onPress={onPressFromDoorButton} />,
        <Text style={[styles.objectArea]}>키워드 목록 보여주기</Text>,
        <MapView />,
        <Settings navigation={navigation} />,
    ];

    return (
        <View style={[styles.container]}>
            <View style={[styles.mainArea]}>
                <ScrollView style={[styles.mainView]}>{mainView[f.mainFocus]}</ScrollView>
            </View>
            <View style={[styles.buttonArea]}>
                <InterfaceButton />
            </View>
            <View style={[styles.contentArea]}>{subView[f.contentFocus]}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        marginTop: commonStyleValues.contentMarginTop,
        width: commonStyleValues.contentWidth,
        alignSelf: 'center',
    },
    container: {
        flex: 1,
        // Try setting `flexDirection` to `"row"`.
        flexDirection: 'column',
    },
    mainArea: {
        flex: 15,
        // height: '55%',
        backgroundColor: '#fff0ff',
    },
    mainText: {
        width: commonStyleValues.contentWidth,
        marginTopa: commonStyleValues.contentMarginTop,
        fontSize: 30,
        alignSelf: 'center',
    },
    buttonArea: {
        flex: 1,
        backgroundColor: '#faa768',
    },
    contentArea: {
        flex: 10,
        backgroundColor: '#00000000',
    },
    objectArea: {
        marginTop: commonStyleValues.contentMarginTop,
        height: commonStyleValues.contentWidth,
        width: commonStyleValues.contentWidth,
        alignSelf: 'center',
        position: 'absolute',
    },
    doorArea: {
        flex: 1,
        marginTop: commonStyleValues.contentMarginTop,
        alignSelf: 'center',
        position: 'absolute',
    },
});

export default PlayScreen;
