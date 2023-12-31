import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text } from "react-native";
import Home from "./Screens/Home";
import About from "./Screens/About";
import { useLayoutEffect } from "react";

export default function App() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerTintColor: "#fff",
                    headerTitleStyle: { fontWeight: "bold" },
                    headerStyle: { backgroundColor: "#6a51ae" },
                    headerRight: () => {
                        return (
                            <Pressable onPress={() => alert("menu press")}>
                                <Text
                                    style={{
                                        color: "#fff",
                                        fontSize: 20,
                                        fontWeight: "bold",
                                    }}
                                >
                                    Menu
                                </Text>
                            </Pressable>
                        );
                    },
                }}
            >
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: "wellcome home",
                        // headerTintColor: "#fff",
                        // headerTitleStyle: { fontWeight: "bold" },
                        // headerStyle: { backgroundColor: "#6a51ae" },
                        // headerRight: () => {
                        //     return (
                        //         <Pressable onPress={() => alert("menu press")}>
                        //             <Text
                        //                 style={{
                        //                     color: "#fff",
                        //                     fontSize: 20,
                        //                     fontWeight: "bold",
                        //                 }}
                        //             >
                        //                 Menu
                        //             </Text>
                        //         </Pressable>
                        //     );
                        // },
                    }}
                />
                <Stack.Screen
                    name="About"
                    component={About}
                    initialParams={{ name: "Guest" }}
                    options={({ route }) => ({ title: route.params.name })}
                />
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
    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },
});
