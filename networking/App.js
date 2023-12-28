import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
    ActivityIndicator,
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function App() {
    const [posts, setPost] = useState([]);
    const [loading, setIsLoading] = useState(true);
    const [reRefresh, setReRefresh] = useState(false);
    const handleFetchData = (limit = 10) => {
        fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
            .then((response) => response.json())
            .then((json) => {
                setPost(json);
                setIsLoading(false);
            });
    };
    useEffect(() => {
        handleFetchData();
    }, []);
    const handleRefreshData = () => {
        setReRefresh(true);
        setIsLoading(true);
        handleFetchData(posts.length + 10);
        setReRefresh(false);
        setIsLoading(false);
    };
    console.log(posts.length);
    if (loading) {
        return (
            <SafeAreaView style={styles.loadingContainer}>
                <ActivityIndicator size={"large"} color={"#000"} />
                <Text style={{ textAlign: "center" }}>Loading...</Text>
            </SafeAreaView>
        );
    }

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
                        onEndReached={handleRefreshData}
                        refreshing={reRefresh}
                        onRefresh={handleRefreshData}
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
    loadingContainer: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        paddingTop: StatusBar.currentHeight,
        justifyContent: "center",
        alignContent: "center",
    },
});
