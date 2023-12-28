import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function App() {
    const [posts, setPost] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=100")
            .then((response) => response.json())
            .then((json) => setPost(json));
    }, []);
    console.log("render");
    return (
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.container}>
                {posts?.length ? (
                    <FlatList
                        data={posts}
                        renderItem={(post) => (
                            <View style={styles.postContainer}>
                                <Text>post: {post.item.id}</Text>
                                <Text>{post.item.title}</Text>
                                <Text>{post.item.body}</Text>
                            </View>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        ListHeaderComponent={<Text>List Post</Text>}
                        ItemSeparatorComponent={
                            <View style={{ paddingVertical: 10 }}></View>
                        }
                    />
                ) : null}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        alignItems: "center",
        justifyContent: "center",
    },
    postContainer: {
        padding: 6,
        borderWidth: 1,
    },
});