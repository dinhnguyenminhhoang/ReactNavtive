import { useEffect, useState } from "react";
import {
    Dimensions,
    StyleSheet,
    Text,
    View,
    useWindowDimensions,
} from "react-native";

export default function App() {
    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;
    return (
        <View style={styles.container}>
            <View
                style={[
                    styles.box,
                    {
                        width: windowWidth > 500 ? "70%" : "90%",
                        height: windowHeight > 500 ? "60%" : "90%",
                    },
                ]}
            >
                <Text
                    style={{
                        fontSize: windowWidth > 500 ? 50 : 24,
                        textAlign: "center",
                    }}
                >
                    well come to comback
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "plum",
        alignItems: "center",
        justifyContent: "center",
    },
    box: {
        // width: windowWidth > 500 ? "70%" : "90%",
        // height: windowHeight > 500 ? "60%" : "90%",
        backgroundColor: "green",
        justifyContent: "center",
    },
    text: {
        textAlign: "center",
    },
});
