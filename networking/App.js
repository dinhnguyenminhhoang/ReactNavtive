import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
    ActivityIndicator,
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import Home from "./Screens/Home";
import Notifications from "./Screens/Notifications";
import Profile from "./Screens/Profile";
import Settings from "./Screens/Settings";

export default function App() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: "wellcom to Home pgae",
                        headerStyle: { backgroundColor: "red" },
                    }}
                />
                <Stack.Screen name="Notifications" component={Notifications} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Settings" component={Settings} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        alignItems: "center",
        justifyContent: "center",
    },
    postContainer: {
        padding: 6,
        borderWidth: 1,
    },
    loadingContainer: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        paddingTop: StatusBar.currentHeight,
        justifyContent: "center",
        alignContent: "center",
    },
});
