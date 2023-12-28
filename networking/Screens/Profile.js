import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Profile({ route }) {
    console.log(route.params);
    return (
        <View>
            <Text>{route.params?.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({});
