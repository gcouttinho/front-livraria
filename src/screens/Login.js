// IMPORTAÇÕES
import React, { useState } from 'react';
import { Image, StyleSheet, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../styles/variables';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
    // ESTADOS
    const [senhaInvisivel, esconderSenha] = useState(true);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    // IMPORTANDO A NAVEGAÇÃO
    const navigation = useNavigation();

    // FUNÇÕES

    const mudarVisibilidade = () => {
        esconderSenha(!senhaInvisivel);
    };    

    const passwordIcon = senhaInvisivel ? 'eye-off' : 'eye';

    const verificarLogin = () => {
        if (email === 'a' && senha === 'a') {
            navigation.navigate('DrawerMenu');
        } else if (email === '' && senha === '') {
            alert('Preencha todos os campos!');
        } else {
            alert('Email ou senha incorretos!');
        }
    };
    

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                 {/* VIEW DA IMAGEM */}
                <View style={styles.topo}>
                    <Image
                        style={styles.logo}
                        source={require('../assets/imagens/login_small.png')}
                    />
                </View>
                {/* TEXTO */}
                <Text style={styles.texto}>TELA DE LOGIN</Text>
                {/* INICIO INPUTS */}
                <View style={styles.inputArea}>
                    <Ionicons name="mail-outline" size={25} color={colors.dark3} />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor={colors.dark3}
                        keyboardType="email-address"
                        onChangeText={(text) => setEmail(text)}
                    />
                </View>

                <View style={styles.inputArea}>
                    <Ionicons name="lock-closed-outline" size={25} color={colors.dark3} />
                    <TextInput
                        style={styles.input}
                        placeholder="Senha"
                        placeholderTextColor={colors.dark3}
                        keyboardType="default"
                        secureTextEntry={senhaInvisivel}
                        onChangeText={(text) => setSenha(text)}
                    />
                    <TouchableOpacity style={styles.icon} onPress={mudarVisibilidade}>
                        <Ionicons name={passwordIcon} color={colors.dark3} size={25} />
                    </TouchableOpacity>
                </View>
                {/* FIM INPUTS */}

                {/* BOTÃO LOGIN */}
                <TouchableOpacity
                    style={styles.loginButtonContainer}
                    onPress={verificarLogin}
                >
                    <Text style={styles.loginButton}>LOGIN</Text>
                </TouchableOpacity>
                <Text style={styles.texto2}>Logar com</Text>

                {/* BOTÕES LOGAR COM REDES SOCIAIS */}
                <View
                    style={styles.botoesSocial}
                >
                    <TouchableOpacity
                        style={styles.loginSocial}
                        onPress={() => navigation.navigate("DrawerMenu")}
                    >
                        <Image
                            style={styles.redesSociais}
                            source={require('../assets/imagens/google.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.loginSocial}
                        onPress={() => navigation.navigate("DrawerMenu")}
                    >
                        <Image
                            style={styles.redesSociais}
                            source={require('../assets/imagens/facebook.png')}
                        />
                    </TouchableOpacity>
                </View>
                {/* BOTÃO CRIAR CONTA */}
                <View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("CreateUser")}
                    >
                        <Text style={styles.texto3}>Criar uma conta</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

{/* ESTILIZAÇÃO */}
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        flex: 1,
        backgroundColor: colors.light3,
        margin: 0,
        padding: 0,
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    topo: {
        alignItems: 'center',
    },
    texto: {
        fontSize: 20,
        fontWeight: '800',
        color: colors.dark2,
        padding: 16,
        marginTop: 5,
    },
    input: {
        color: colors.dark2,
        backgroundColor: 'transparent',
        width: 350,
        height: 40,
        padding: 8,
        fontSize: 15,
    },
    inputArea: {
        borderColor: colors.dark2,
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
        backgroundColor: colors.primary,
        color: colors.light,
        fontSize: 15,
        fontWeight: 'bold',
        padding: 14,
        margin: 10,
        textAlign: 'center',
        borderRadius: 14,
    },
    botoesSocial: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    texto2: {
        fontSize: 15,
        color: colors.dark2,
        textAlign: 'center',
    },
    loginSocial: {
        width: 55,
        height: 55,
        backgroundColor: colors.light,
        color: colors.dark2,
        alignContent: 'center',
        justifyContent: 'center',
        margin: 10,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: colors.dark2,
        alignItems: 'center',
    },
    redesSociais: {
        width: 30,
        height: 30,
        padding: 8,
    },
    texto3: {
        fontSize: 20,
        fontWeight: '800',
        color: colors.primary,
        textAlign: 'center',
        marginTop: 10,
    },
});
