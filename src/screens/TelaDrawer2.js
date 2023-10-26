
import { Image, StyleSheet, Text, View } from "react-native";

// IMPORTAÇÕES DO DRAWER MENU

import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from "@react-navigation/drawer";

export default function TelaDrawer2() {
    return (
        <View style={styles.container}>
            <Text>Tela 2</Text>
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