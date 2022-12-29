import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {getPlayDataFromAddress, setSavePoint, setMapData} from '../services/PlayDataService';
import {SampleData} from '../datas/SampleData';
import {toAddress} from '../ducks/PlaySlice';
import {PlayDataProps} from '../types/PlayDataProps';
import {StoryViewProps} from '../types/StoryViewProps';

// 정답과 다음데이터 주소를 전달해줘야 한다.
const StoryView = (props: StoryViewProps) => {
    // 리듀서 쓰기
    const dispatch = useDispatch();
    const [index, setIndex] = useState(0);
    const size = props.text.length;
    const [data, setData] = useState<PlayDataProps>(SampleData);

    useEffect(() => {
        const settings = async () => {
            await getPlayDataFromAddress(props.nextAddress).then(e => setData(e));
        };
        settings();
    }, []);

    console.log(`StoryView nextAddress : ${props.nextAddress}`);
    console.log(`StoryView nextAddress data : ${JSON.stringify(data.address)}`);

    const onPressToNext = async () => {
        let i = index;
        if (i === size - 1) {
            dispatch(
                toAddress({
                    data,
                }),
            );

            await setSavePoint(data.address);
            await setMapData([data.roomName, data.address]);
        }
        if (i < size - 1) {
            i += 1;
            setIndex(i);
        }
    };

    return (
        <View style={[styles.container]}>
            <Text style={[styles.textContent]}>{props.text[index]}</Text>
            <TouchableOpacity style={styles.nextButton} onPress={() => onPressToNext()}>
                <Text style={styles.buttonText}>다음</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'center',
        alignContent: 'center',
    },
    textContent: {
        flex: 1,
        fontSize: 24,
        textAlign: 'center',
    },
    nextButton: {
        marginTop: 20,
    },
    buttonText: {
        fontSize: 20,
        color: '#3423ff',
    },
});

export default StoryView;
