import { useState } from "react";
import {
    Platform,
    SafeAreaView,
    StyleSheet,
    Switch,
    Text,
    TextInput,
    View,
} from "react-native";
export default function App() {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <SafeAreaView
            style={[
                styles.safeContainer,
                {
                    backgroundColor: darkMode ? "#f5f5f5" : "#333",
                },
            ]}
        >
            <View
                style={[
                    styles.container,
                    {
                        backgroundColor: darkMode ? "#f5f5f5" : "#333",
                    },
                ]}
            >
                <TextInput
                    style={styles.input}
                    placeholder="text input"
                    // secureTextEntry
                    keyboardType="default"
                    autoCorrect
                    // autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder="text input"
                    // secureTextEntry
                    keyboardType="default"
                    autoCorrect
                    autoCapitalize="none"
                    multiline
                />
                <View style={styles.swichCntainer}>
                    <Text style={styles.swichText}>Dark mode</Text>
                    <Switch
                        value={darkMode}
                        onChange={() => setDarkMode(!darkMode)}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        paddingTop: 20,
    },
    container: {
        flex: 1,
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
    swichCntainer: {
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
    },
});
