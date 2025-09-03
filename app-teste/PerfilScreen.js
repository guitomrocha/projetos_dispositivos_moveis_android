import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

function PerfilScreen() {
    return (<View>
        <Text>
            Ola Mundo Pessoal!
        </Text>
        <Button title="Clique aqui" onPress={ () => alert('Botão Pressionado')}/>
    </View>);
}

export default PerfilScreen;