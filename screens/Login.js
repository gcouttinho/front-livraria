import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TextInput, TouchableOpacity, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const colors = {
    light: '#fff',
    light2: '#f5f5f550',
    dark: '#000',
};

const color1 = '#f34'

export default function Login() {
    const [hidePassword, setHidePassword] = useState(true);

    const hidden = hidePassword ? 'eye-off' : 'eye';

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topo}>
                <Image source={require('../assets/image/login.png')} />
            </View>

            <Text style={styles.texto}>TELA DE LOGIN</Text>

            <View style={styles.inputArea}>
                <Ionicons name='mail-outline' size={25} color={colors.light}/>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor={color1}
                    keyboardType="email-address"
                />
            </View>

            <View style={styles.inputArea}>
                <Ionicons name='lock-closed-outline' size={25} color={colors.light}/>
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    placeholderTextColor={colors.light2}
                    keyboardType="password"
                    secureTextEntry={hidePassword}
                />
                <TouchableOpacity
                    style={styles.icon}
                    onPress={() => setHidePassword(!hidePassword)}
                >
                    <Ionicons name={hidden} color={colors.light} size={25} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <Text style={styles.loginButton}>
                    LOGIN
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333',
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    topo: {
        alignItems: 'center',
    },
    login: {
        width: 350,
    },
    texto: {
        fontSize: 20,
        fontWeight: '800',
        color: colors.light,
        padding: 16,
        marginTop: 5,
    },
    input: {
        color: colors.light,
        backgroundColor: 'transparent',
        width: 350,
        height: 40,
        padding: 8,
        fontSize: 15,
    },
    inputArea: {
        borderColor: colors.light,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        padding: 8,
        borderRadius: 14,
        borderBottomWidth: 1,
    },
    icon: {
        position: 'absolute',
        right: 15,
    },
    loginButton: {
        backgroundColor: colors.light,
        color: colors.dark,
        fontSize: 15,
        fontWeight: 'bold',
        padding: 14,
        margin: 10,
        textAlign: 'center',
        borderRadius: 14,
    },
});