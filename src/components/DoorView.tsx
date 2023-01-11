import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button, Pressable} from 'react-native';
import {DoorViewProps} from '../types/DoorViewProps';
import {getPlayDataFromAddress, setPlayData} from '../services/PlayDataService';
import {commonStyleValues} from '../common/commonStyleValues';

// 정답과 다음데이터 주소를 전달해줘야 한다.
const DoorView = (props: DoorViewProps) => {
    console.log(props.data.address);
    const door = props.data.doors[props.index];
    const [text, onChangeText] = useState('');

    const checkAnswer = async () => {
        // 답이 맞거나 그냥 통과하는 문이면 다음 주로소 이동.
        if (!door.isLock) {
            await props.onPress();
        } else if (text === door.answer) {
            const data = await getPlayDataFromAddress(props.data.address);
            data.doors[props.index].isLock = false;
            await setPlayData(data);
            await props.onPress();
        }
    };

    return (
        <View style={[styles.container]}>
            <Text style={[styles.textContent]}>{door.content}</Text>
            {door.isLock ? (
                <TextInput style={styles.input} onChangeText={onChangeText} value={text} />
            ) : null}

            <Pressable
                style={styles.button}
                onPress={() => {
                    checkAnswer();
                }}
            >
                <Text>next</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    textContent: {
        flex: 1,
        fontSize: commonStyleValues.textFontSize,
        alignSelf: 'center',
    },
    input: {
        height: 40,
        marginTop: 12,
        borderWidth: 1,
        borderColor: '#f0af0a',
        padding: 10,
    },
    button: {
        marginTop: commonStyleValues.contentMarginTop,
    },
});

export default DoorView;
