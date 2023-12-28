import {
    Platform,
    SafeAreaView,
    StyleSheet,
    TextInput,
    View,
} from "react-native";
export default function App() {
    return (
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="text input"
                    // secureTextEntry
                    keyboardType="default"
                    autoCorrect
                    // autoCapitalize="none"
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        paddingTop: 20,
    },
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        alignItems: "center",
        paddingTop: Platform.OS === "ios" ? 50 : 0,
    },
    input: {
        height: 40,
        width: "100%",
        margin: 12,
        padding: 10,
        borderWidth: 1,
    },
});
