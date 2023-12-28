import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function About({ route, navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>About name: {route.params?.name}</Text>

            <Button
                title="Update the name"
                onPress={() => navigation.setParams({ name: "new name" })}
            />
            <Button
                title="rgo back with Data"
                onPress={() =>
                    navigation.navigate("Home", { result: "Data from about" })
                }
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