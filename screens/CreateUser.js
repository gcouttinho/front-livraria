import { StyleSheet, Text, View } from "react-native";

export default function CreateUser() {
    return (
        <View style={styles.container}>
            <Text>Tela de Cadastro</Text>
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