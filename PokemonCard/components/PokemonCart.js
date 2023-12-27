import {
    View,
    Text,
    StyleSheet,
    Platform,
    ScrollView,
    Image,
} from "react-native";
import React from "react";
const getTypeDetails = (type) => {
    switch (type.toLowerCase()) {
        case "electric":
            return { borderColor: "#FFD700", emoji: "⚡" };
        case "water":
            return { borderColor: "#6493EA", emoji: "💧" };
        case "fire":
            return { borderColor: "#ff5733", emoji: "🔥" };
        case "grass":
            return { borderColor: "#66cc66", emoji: "🍃" };
        default:
            return { borderColor: "#a0a0a0", emoji: "❓" };
    }
};
export default function PokemonCart(props) {
    const { name, image, type, hp, moves, weaknesses } = props;
    const { borderColor, emoji } = getTypeDetails(type);
    return (
        <View style={styles.card}>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.hp}>❤ {hp}</Text>
            </View>
            <Image
                style={styles.image}
                source={image}
                accessibilityLabel={`${name} Pokemon`}
                resizeMode="contain"
            />
            <View style={styles.typeContainer}>
                <View style={[styles.badge, { borderColor: borderColor }]}>
                    <Text style={styles.emoji}>{emoji}</Text>
                    <Text style={styles.type}>{type}</Text>
                </View>
            </View>
            <View style={styles.moveContainer}>
                <Text style={styles.move}>Moves : {moves.join(", ")}</Text>
            </View>
            <View style={styles.weaknessesContainer}>
                <Text style={styles.weaknesses}>
                    Weaknesses : {weaknesses.join(", ")}
                </Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        borderRadius: 16,
        padding: 16,
        borderWidth: 2,
        margin: 16,
        ...Platform.select({
            ios: {
                shadowColor: "#333",
                shadowOffset: { width: 2, height: 2 },
                shadowRadius: 4,
                shadowOpacity: 0.3,
            },
            android: {
                elevation: 5,
            },
        }),
    },
    nameContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 32,
    },
    name: {
        fontSize: 30,
        fontWeight: "bold",
    },
    hp: {
        fontSize: 22,
    },
    image: {
        width: "100%",
        height: 200,
        marginBottom: 16,
    },
    typeContainer: {
        marginBottom: 40,
        alignItems: "center",
    },
    badge: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
        borderWidth: 4,
    },
    emoji: {
        fontSize: 30,
        marginRight: 12,
    },
    type: {
        fontSize: 22,
        fontWeight: "bold",
    },
    moveContainer: {
        marginBottom: 16,
    },
    move: {
        fontSize: 20,
        fontWeight: "bold",
        lineHeight: 26,
    },
    weaknessesContainer: {
        marginBottom: 8,
    },
    weaknesses: {
        fontSize: 20,
        lineHeight: 26,
        fontWeight: "500",
    },
});
