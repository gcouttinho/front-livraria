import { Image, StyleSheet, Text, View } from "react-native";

// IMPORTAÇÕES DO DRAWER MENU

import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from "@react-navigation/drawer";

export default function FeedBooks() {
    return (
        <View style={styles.container}>
            <Text>Tela de Feed</Text>
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