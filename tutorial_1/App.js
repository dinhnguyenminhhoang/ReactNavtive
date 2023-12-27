import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";
import CustomButton from "./components/CustomButton/CustomButton";
export default function App() {
    return (
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.container}>
                <View style={styles.box}>
                    <Text style={styles.text}>well come to comback</Text>
                    <CustomButton
                        title="Press me"
                        onPress={() => alert("Pressed !")}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: "plum",
    },
    container: {
        flex: 1,
        backgroundColor: "plum",
        alignItems: "center",
        paddingTop: Platform.OS === "ios" ? 50 : 0,
    },
    box: {
        padding: 20,
    },
    text: {
        ...Platform.select({
            ios: {
                fontSize: 40,
                color: "green",
            },
            android: {
                fontSize: 24,
                color: "red",
            },
        }),
        fontWeight: "bold",
    },
});
