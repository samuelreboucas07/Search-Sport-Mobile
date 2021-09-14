import React, { useState } from 'react';
import { View, Image, KeyboardAvoidingView } from 'react-native';
import { styles } from './styles';
import { TextInput, Button, Title, Subheading, Text } from 'react-native-paper';
import { gray, greenLine } from '../../constants/color';
import { useAuth } from '../../contexts/auth';

const Login = ({ navigation }: any) => {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const { signIn } = useAuth();

  return (
    <View style={styles.container}>
      <View style={styles.viewLogo}>
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
      </View>
      <KeyboardAvoidingView style={{ flex: 1, justifyContent: 'center' }}>
        <View style={styles.contentLogin}>
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
            secureTextEntry={hidePassword}
            onChangeText={text => setPassword(text)}
            style={styles.contentInput}
            underlineColor={gray}
            theme={{
              colors: {
                primary: greenLine,
              }
            }}
            right={<TextInput.Icon name="eye" onPress={() => setHidePassword(!hidePassword)} />}
          />
          <Text style={styles.legend}>Esqueceu a senha? Clique aqui</Text>
          <Button
            mode="contained"
            style={styles.button}
            onPress={() => signIn(email, password)}
          >
            Entrar
          </Button>

          <Button mode="text" style={styles.buttonSignUp} color={greenLine} onPress={() => { navigation.navigate('SignUp') }}>Criar conta</Button>
        </View>
      </KeyboardAvoidingView>
    </View>
  )
};

export default Login;