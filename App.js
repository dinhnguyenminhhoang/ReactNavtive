import { Dimensions, StyleSheet, Text, View } from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.text}>well come to comback</Text>
            </View>
        </View>
    );
}
const winddowWidth = Dimensions.get("window").width;
const winddowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "plum",
        alignItems: "center",
        justifyContent: "center",
    },
    box: {
        width: winddowWidth > 500 ? "70%" : "90%",
        height: winddowHeight > 500 ? "60%" : "90%",
        backgroundColor: "green",
        justifyContent: "center",
    },
    text: {
        textAlign: "center",
    },
});
