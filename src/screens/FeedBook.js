import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import FlatList from '../components/FlatList';
import FlatLista from '../components/FlatList';

export default function FeedBooks() {
    return (
        <View style={styles.container}>
            <FlatLista />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
});