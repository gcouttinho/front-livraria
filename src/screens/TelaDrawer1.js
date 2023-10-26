
import { Image, StyleSheet, Text, View } from "react-native";

export default function TelaDrawer1() {
    return (
        <View style={styles.container}>
            <Text>Tela 1</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});