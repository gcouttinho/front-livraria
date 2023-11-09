import { Image, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from 'react';
import { colors } from "../styles/variables";

const livros = [
    {
        codigo_livro: 1,
        titulo_livro: 'As Cavernas de Aço',
        autor: 'Isaac Asimov',
        preco_livro: '90,00',
        imagem_livro: require('../assets/imagens/livros/cavernas_aco.jpg'),
    },
    {
        codigo_livro: 2,
        titulo_livro: 'O Sol Desvelado',
        autor: 'Isaac Asimov',
        preco_livro: '90,00',
        imagem_livro: require('../assets/imagens/livros/sol_desvelado.jpg'),
    },
    {
        codigo_livro: 3,
        titulo_livro: 'Robôs da Alvorada',
        autor: 'Isaac Asimov',
        preco_livro: '90,00',
        imagem_livro: require('../assets/imagens/livros/robos_alvorada.jpg'),
    },
    {
        codigo_livro: 4,
        titulo_livro: 'Robôs e o Império',
        autor: 'Isaac Asimov',
        preco_livro: '90,00',
        imagem_livro: require('../assets/imagens/livros/robos_imperio.jpg'),
    },
    {
        codigo_livro: 5,
        titulo_livro: 'Poeira de Estrelas',
        autor: 'Isaac Asimov',
        preco_livro: '90,00',
        imagem_livro: require('../assets/imagens/livros/poeira_estrelas.jpg'),
    },
    {
        codigo_livro: 6,
        titulo_livro: 'As Correntes do Espaço',
        autor: 'Isaac Asimov',
        preco_livro: '90,00',
        imagem_livro: require('../assets/imagens/livros/correntes_espaco.jpg'),
    },
    {
        codigo_livro: 7,
        titulo_livro: 'Pedra no Céu',
        autor: 'Isaac Asimov',
        preco_livro: '90,00',
        imagem_livro: require('../assets/imagens/livros/pedra_ceu.jpg'),
    },
    {
        codigo_livro: 8,
        titulo_livro: 'Prelúdio à Fundação',
        autor: 'Isaac Asimov',
        preco_livro: '90,00',
        imagem_livro: require('../assets/imagens/livros/fundacao_preludio.jpg'),
    },
    {
        codigo_livro: 9,
        titulo_livro: 'Origens da Fundação',
        autor: 'Isaac Asimov',
        preco_livro: '90,00',
        imagem_livro: require('../assets/imagens/livros/fundacao_origem.jpg'),
    },
    {
        codigo_livro: 10,
        titulo_livro: 'Fundação',
        autor: 'Isaac Asimov',
        preco_livro: '90,00',
        imagem_livro: require('../assets/imagens/livros/fundacao.jpg'),
    },
    {
        codigo_livro: 11,
        titulo_livro: 'Fundação e Império',
        autor: 'Isaac Asimov',
        preco_livro: '90,00',
        imagem_livro: require('../assets/imagens/livros/fundacao_imperio.jpg'),
    },
    {
        codigo_livro: 12,
        titulo_livro: 'Segunda Fundação',
        autor: 'Isaac Asimov',
        preco_livro: '90,00',
        imagem_livro: require('../assets/imagens/livros/fundacao_segunda.jpg'),
    },
    {
        codigo_livro: 13,
        titulo_livro: 'Limites da Fundação',
        autor: 'Isaac Asimov',
        preco_livro: '90,00',
        imagem_livro: require('../assets/imagens/livros/fundacao_limites.jpg'),
    },
    {
        codigo_livro: 14,
        titulo_livro: 'Fundação e a Terra',
        autor: 'Isaac Asimov',
        preco_livro: '90,00',
        imagem_livro: require('../assets/imagens/livros/fundacao_terra.jpg'),
    },
];


export default function FlatLista() {
    return (
        <FlatList
            data={livros}
            ListEmptyComponent={<Text>Não há livros cadastrados.</Text>}
            keyExtractor={item => item.codigo_livro.toString()}
            renderItem={({ item }) => (
                <View style={styles.bookContainer}>
                    <Image
                        style={styles.bookImage}
                        source={item.imagem_livro}
                    />
                    <View style={styles.BookInfo}>
                        <View style={styles.bookText}>
                            <Text style={styles.bookTitulo}>{item.titulo_livro}</Text>
                            <Text style={styles.bookAuthor}>{item.autor}</Text>
                            <Text style={styles.bookPreco}>R$ {item.preco_livro}</Text>
                        </View>
                        <TouchableOpacity
                            style={{ justifyContent: 'center' }}
                            onPress={() => alert(`Livro ${item.titulo_livro} foi adicionado ao carrinho.`)}
                        >
                            <Text style={styles.carrinho}>Adicionar ao carrinho</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        />
    );
}

const styles = StyleSheet.create({
    bookContainer: {
        alignContent: 'left',
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginVertical: 8,
        marginHorizontal: 16,
        padding: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 1,
        shadowRadius: 6.27,
        elevation: 10,
    },
    BookInfo: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
    },
    bookImage: {
        width: 100,
        height: 150,
        borderRadius: 10,
    },
    bookText: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 10,
        justifyContent: 'center',
    },
    bookTitulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'left',
    },
    bookAuthor: {
        fontSize: 16,
        color: '#000',
    },
    bookPreco: {
        fontSize: 16,
        color: '#000',
    },
    carrinho: {
        backgroundColor: colors.info,
        borderRadius: 10,
        padding: 13,
        fontSize: 16,
        color: colors.light,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});