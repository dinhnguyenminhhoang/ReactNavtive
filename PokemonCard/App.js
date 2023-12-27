import {
    FlatList,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import PokemonCart from "./components/PokemonCart";

export default function App() {
    const listCart = [
        {
            name: "Tallinje",
            image: require("./assets/rl.jpg"),
            type: "Fire",
            hp: 39,
            moves: ["Scratch", "Ember", "Growl", "Leer"],
            weaknesses: ["water", "Rock"],
        },
        {
            name: "Evoli Dessin",
            image: require("./assets/bks1.jpg"),
            type: "Fystic",
            hp: 39,
            moves: ["Scratch", "Ember", "Growl", "Leer"],
            weaknesses: ["water", "Rock"],
        },
        {
            name: "Pikachu",
            image: require("./assets/bks3.jpg"),
            type: "Electric",
            hp: 39,
            moves: ["Scratch", "Ember", "Growl", "Leer"],
            weaknesses: ["water", "Rock"],
        },
        {
            name: "Bulbasaur",
            image: require("./assets/bks4.jpg"),
            type: "Grass",
            hp: 39,
            moves: ["Scratch", "Ember", "Growl", "Leer"],
            weaknesses: ["water", "Rock"],
        },
        {
            name: "Pachirisu",
            image: require("./assets/bks5.jpg"),
            type: "Water",
            hp: 39,
            moves: ["Scratch", "Ember", "Growl", "Leer"],
            weaknesses: ["water", "Rock"],
        },
    ];
    // <ScrollView>
    //             <View style={{ alignItems: "center" }}>
    //                 <Text
    //                     style={{
    //                         fontSize: 24,
    //                         fontWeight: "bold",
    //                         paddingVertical: 4,
    //                     }}
    //                 >
    //                     Pokemon Collection
    //                 </Text>
    //             </View>
    //             {listCart.map((cart, index) => (
    //                 <PokemonCart {...cart} key={index} />
    //             ))}
    //         </ScrollView>
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={listCart}
                keyExtractor={(item, index) => index.toString()}
                renderItem={(cart) => {
                    return <PokemonCart {...cart.item} key={cart.index} />;
                }}
                ItemSeparatorComponent={() => (
                    <View style={{ padding: 5 }}></View>
                )}
                ListEmptyComponent={
                    <Text
                        style={{
                            textAlign: "center",
                            fontSize: 24,
                            fontWeight: "bold",
                        }}
                    >
                        No item found!
                    </Text>
                }
                ListHeaderComponent={
                    <View style={{ alignItems: "center" }}>
                        <Text
                            style={{
                                fontSize: 24,
                                fontWeight: "bold",
                                paddingVertical: 4,
                            }}
                        >
                            Pokemon Collection
                        </Text>
                    </View>
                }
                ListFooterComponent={
                    <View style={{ alignItems: "center" }}>
                        <Text
                            style={{
                                fontSize: 24,
                                fontWeight: "bold",
                                paddingTop: 4,
                                paddingBottom: 20,
                            }}
                        >
                            End List Pokemon Card
                        </Text>
                    </View>
                }
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        paddingTop: Platform.OS === "ios" ? 0 : 25,
    },
});
