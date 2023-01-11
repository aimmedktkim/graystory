import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {commonStyleValues} from '../common/commonStyleValues';
import {StoryViewProps} from '../types/StoryViewProps';

// 정답과 다음데이터 주소를 전달해줘야 한다.
const StoryView = (props: StoryViewProps) => {
    const [index, setIndex] = useState(0);
    const size = props.text.length;

    const onPressToNext = async () => {
        let i = index;
        if (i === size - 1) {
            await props.onPress();
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
        fontSize: commonStyleValues.textFontSize,
        textAlign: 'center',
    },
    nextButton: {
        marginTop: commonStyleValues.contentMarginTop,
    },
    buttonText: {
        fontSize: commonStyleValues.buttonFontSize,
        color: '#3423ff',
    },
});

export default StoryView;
