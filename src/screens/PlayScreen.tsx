import React from 'react';
import {StyleSheet, Text, View, ScrollView, Button} from 'react-native';
import InterfaceButton from '../components/InterfaceButton';
import {useSelector} from 'react-redux';
import {RootState} from '../ducks';
import DoorView from '../components/DoorView';
import ObjectView from '../components/ObjectView';
import StoryView from '../components/StoryView';
import RoomView from '../components/RoomView';
import ContentButton from '../components/ContentButton';
import DoorButton from '../components/DoorButton';
import MapView from '../components/MapView';

const PlayScreen = () => {
    // 리듀서 읽기
    const f = useSelector((state: RootState) => state.PlaySlice);

    return (
        <View style={[styles.container]}>
            <View style={[styles.textArea]}>
                <ScrollView style={[styles.mainView]}>
                    {f.mainFocus === 0 ? f.category === 'story' ? <StoryView text={f.text} nextAddress={f.nextAddress} /> : <RoomView text={f.text} /> : null}
                    {f.mainFocus === 1 ? f.objects.length === 0 ? null : <ObjectView data={f.objects[f.objectIndex]} /> : null}
                    {f.mainFocus === 2 ? (
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
                            />
                        )
                    ) : null}
                </ScrollView>
            </View>
            <View style={[styles.buttonArea]}>
                <InterfaceButton />
            </View>
            <View style={[styles.contentArea]}>
                {f.contentFocus === 0
                    ? // 기본 화면 보여주기
                      null
                    : null}
                {f.contentFocus === 1 ? <ContentButton objects={f.objects} /> : null}
                {f.contentFocus === 2 ? <DoorButton doors={f.doors} /> : null}
                {f.contentFocus === 3 ? <Text style={[styles.objectArea]}>키워드 목록 보여주기</Text> : null}
                {f.contentFocus === 4 ? <MapView /> : null}
                {f.contentFocus === 5 ? <Text style={[styles.objectArea]}>설정 화면 보여주기</Text> : null}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        marginTop: 20,
        width: '80%',
        alignSelf: 'center',
    },
    container: {
        flex: 1,
        // Try setting `flexDirection` to `"row"`.
        flexDirection: 'column',
    },
    textArea: {
        flex: 15,
        // height: '55%',
        backgroundColor: '#fff0ff',
    },
    mainText: {
        width: '80%',
        paddingTop: 20,
        fontSize: 30,
        alignSelf: 'center',
    },
    buttonArea: {
        flex: 1,
        // height: '5%',
        backgroundColor: '#faa768',
    },
    contentArea: {
        flex: 10,
        // height: '40%',
        backgroundColor: '#00000000',
    },
    objectArea: {
        marginTop: 20,
        height: '80%',
        width: '80%',
        alignSelf: 'center',
        position: 'absolute',
    },
    doorArea: {
        flex: 1,
        paddingTop: 20,
        alignSelf: 'center',
        position: 'absolute',
    },
});

export default PlayScreen;
