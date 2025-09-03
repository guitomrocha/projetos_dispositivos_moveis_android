import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import HomeScreen from './HomeScreen';

  export default function App() {
  const [novoTexto, setNovoTexto] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        placeholder= "Digite o texto"
        onChangeText={novoTexto1 => setNovoTexto(novoTexto1)}
        value={novoTexto}
      />
      <Text>Olá Mundo!</Text>
      <HomeScreen/>
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
