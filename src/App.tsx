import React, { useCallback, useEffect, useState } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native"
import PlayScreen from "./screens/PlayScreen";

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './ducks';
import { RouteProp, useRoute, NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./navigations/MainNavigation";

const App = () => {

    const store = configureStore({
        reducer: rootReducer
    })

    return (
        <NavigationContainer>
            <Provider store={store}>
                <SafeAreaView
                    style={styles.container}
                >
                    <MainNavigation />
                </SafeAreaView>
            </Provider>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    text: {
        fontSize: 16
    },
    wrapperCustom: {
        borderRadius: 8,
        padding: 6
    },
    logBox: {
        padding: 20,
        margin: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#f0f0f0',
        backgroundColor: '#f9f9f9'
    }
});

export default App;
