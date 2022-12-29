import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {ObjectViewProps} from '../types/ObjectViewProps';

// 정답과 다음데이터 주소를 전달해줘야 한다.
const ObjectView = (props: ObjectViewProps) => {
    const contentType = props.data.contentType;

    return (
        <View style={[styles.container]}>
            {contentType === 'text' ? <Text style={[styles.mainText]}>{props.data.content}</Text> : null}
            {contentType === 'image' ? <Image style={[styles.image]} source={props.data.url} /> : null}
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
});

export default ObjectView;
