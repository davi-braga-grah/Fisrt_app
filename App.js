import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from 'react-native-web';

export default function App() {
  return (
    <LinearGradient
      colors={['#f67004', 'orange']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}>

      <View style={styles.container}>
        <ImageBackground
          source={{ uri: 'https://triviapw.com.br/wp-content/uploads/2025/07/Zenless-Zone-Zero.webp' }}
          style={{ width: 500, height: 500 }}>
        </ImageBackground>
        <Text style={styles.texto}>Zenless Zone Zero</Text>

        <TouchableOpacity
          style={styles.botao}
          color="lightgray"
          title="Like"
          onPress={() => alert('Você curtiu!')}>
          <Text>Like</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          color="lightgray"
          title="Salvar"
          onPress={() => alert('Você Salvou!')}>
          <Text>Salvar</Text>
        </TouchableOpacity>

      </View>

    </LinearGradient>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  texto: {
    color: 'black',
    alignItems: 'bottom',
    fontSize: 50,
  },
  botao: {
    backgroundColor: '#bcbcbc',
    borderRadius: 5,
    justifyContent:"center",
    alignItens:'center',
    shadowColor:'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  textoBotao: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
