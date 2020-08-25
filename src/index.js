import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native'

// Não possui valor semantico (significado)
// View: div, footer, header, main, aside, section
// Todos os componentes possuem por padrão "display: flex"
// Não possuem estilização própria, tudo precisa ser feito pelo CSS
// Text: P, span, strong, h1, h2, h3
export default function App() {
    return (
        <>
            <StatusBar barStyle='light-content' backgroundColor='#7159c1'/>
            <View style={styles.container}>
            <Text style={styles.title}>Hello GoStack!</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1',
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        color: '#FFF',
        fontSize: 32,
        fontWeight: 'bold',
    },
});