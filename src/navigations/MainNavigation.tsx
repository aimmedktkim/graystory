import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainNavigatonType } from "../types/MainNavigatonType";
import MainScreen from "../screens/MainScreen";
import PlayScreen from "../screens/PlayScreen";

// 스택 컴포넌트 생성, 타입을 명시한다.
const Stack = createNativeStackNavigator<MainNavigatonType>();

const MainNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Main"
                component={MainScreen}
            />
            <Stack.Screen
                name="Play"
                component={PlayScreen}
            />
        </Stack.Navigator>
    )
}

export default MainNavigation;