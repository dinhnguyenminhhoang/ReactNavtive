import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Home({ navigation, route }) {
    // const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home: {route.params?.result}</Text>
            <Button
                onPress={() =>
                    navigation.navigate("About", {
                        name: "Vishwas",
                    })
                }
                title=" Go to About"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },
});
