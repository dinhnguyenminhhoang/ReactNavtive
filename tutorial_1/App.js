import { useState } from "react";
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
export default function App() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const handleChange = (fieldName, value) => {
        setFormData({
            ...formData,
            [fieldName]: value,
        });
    };

    return (
        <SafeAreaView style={styles.safeContainer}>
            <KeyboardAvoidingView
                style={styles.container}
                keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
            >
                <View
                    style={{
                        borderWidth: 1,
                        borderColor: "#ddd",
                        padding: 16,
                        borderRadius: 10,
                    }}
                >
                    <View>
                        <Text style={styles.header}>Login Now</Text>
                        <Image
                            source={require("./assets/adaptive-icon.png")}
                            style={styles.Image}
                        />
                    </View>
                    <View style={styles.inputForm}>
                        <TextInput
                            style={styles.input}
                            placeholder="email@example.com"
                            keyboardType="email-address"
                            value={formData.email}
                            name="email"
                            onChangeText={(text) => handleChange("email", text)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            secureTextEntry
                            value={formData.password}
                            onChangeText={(text) =>
                                handleChange("password", text)
                            }
                        />
                    </View>
                    <Pressable
                        style={styles.submitForm}
                        onPress={() => alert("you now login in successfully")}
                    >
                        <Text style={styles.submitText}>Login</Text>
                    </Pressable>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: "#f5f5f5",
    },
    container: {
        flex: 1,
        alignItems: "center",
        // justifyContent: "center",
        paddingTop: Platform.OS === "ios" ? 60 : 0,
        backgroundColor: "#f5f5f5",
    },
    header: {
        color: "blue",
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 8,
    },
    inputForm: {
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginVertical: 6,
        borderRadius: 8,
        minWidth: 240,
    },
    submitForm: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: "blue",
        borderRadius: 10,
        borderWidth: 1,
    },
    submitText: {
        color: "white",
        fontSize: 16,
        textAlign: "center",
    },
    Image: {
        width: 200,
        height: 200,
        alignSelf: "center",
        marginBottom: 20,
    },
});
