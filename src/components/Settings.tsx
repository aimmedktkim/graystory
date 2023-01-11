import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {commonStyleValues} from '../common/commonStyleValues';

const Settings = (props: any) => {
    const onPress = () => {
        props.navigation.navigate('Main');
    };
    return (
        <View style={[styles.objectArea]}>
            <Button title={'메인으로'} onPress={onPress}></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    objectArea: {
        marginTop: commonStyleValues.contentMarginTop,
        height: '80%',
        width: commonStyleValues.contentWidth,
        alignSelf: 'center',
    },
});

export default Settings;
