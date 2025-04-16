import { StatusBar } from 'expo-status-bar'
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in</Text>
      <TextInput style={styles.input} placeholder='Email' />
      <TextInput style={styles.input} placeholder='Password' secureTextEntry />
      <Pressable
        onPress={() => {
          console.log('Sign in')
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign in</Text>
      </Pressable>
      <StatusBar style='auto' />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 20,
    gap: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 600,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
  },
  button: {
    backgroundColor: '#4353FD',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 600,
  },
})
