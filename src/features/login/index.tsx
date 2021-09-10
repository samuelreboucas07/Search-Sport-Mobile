import React, { useState } from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { TextInput, Button, Title, Subheading, Text } from 'react-native-paper';
import { gray, greenLine } from '../../constants/color';
import { useAuth } from '../../contexts/auth';

const Login = () => {
  
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  
  const { signIn } = useAuth();

  return (
    <View style={styles.container}>
      <Subheading style={styles.subTitle}>Bem-vindo</Subheading>
      <Title style={styles.title}>Entrar</Title>
      <TextInput
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.contentInput}
        underlineColor={gray}
        theme={{
          colors: {
            primary: greenLine,
          }
        }}
      />
      <TextInput
        label="Senha"
        value={password}
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
        style={styles.contentInput}
        underlineColor={gray}
        theme={{
          colors: {
            primary: greenLine,
          }
        }}
      />
      <Button
        mode="contained"
        style={styles.button}
        onPress={() => signIn(email, password)}
      >
        Entrar
      </Button>
      
      <Text style={styles.legend}>Esqueceu a senha? Clique aqui</Text>

    </View>
  )
};

export default Login;