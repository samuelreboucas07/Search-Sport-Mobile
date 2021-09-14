import React, { useState, createRef } from 'react';
import { View, Image, TouchableHighlight, KeyboardAvoidingView } from 'react-native';
import { styles } from './styles';
import { TextInput, Button } from 'react-native-paper';
import { gray, greenLine } from '../../constants/color';
import { useAuth } from '../../contexts/auth';
import { TextInputMask } from 'react-native-masked-text';
import { chooseFile } from '../../actions/match';

const SignUp = () => {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [file, setFile] = useState<any>();
  const [hidePassword, setHidePassword] = useState<boolean>(true);

  const ref = createRef();
  const { signUp } = useAuth();

  const handleChosenImage = () => {
    chooseFile(setFile);
  };

  return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => handleChosenImage()} style={styles.buttonChooseImage}>
          {
            !file ? (
              <Image
                source={require('../../assets/player.png')}
                style={styles.avatar}
              />
            ) : (
              <Image
                source={{ uri: `data:image/jpeg;base64, ${file.fileData}` }}
                style={styles.avatar}
              />
            )
          }
        </TouchableHighlight>
        <TextInput
          label="Nome completo"
          placeholder="Ex: João Pedro dos santos"
          value={name}
          onChangeText={text => setName(text)}
          style={styles.contentInput}
          underlineColor={gray}
          theme={{
            colors: {
              primary: greenLine,
            }
          }}
        />
        <TextInput
          label="Email"
          value={email}
          placeholder="Ex: joao@hotmail.com"
          keyboardType='email-address'
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
          label="Telefone"
          value={phone}
          placeholder="Ex: 75982857331"
          style={styles.contentInput}
          underlineColor={gray}
          keyboardType='numeric'
          theme={{
            colors: {
              primary: greenLine,
            }
          }}
          render={(props) => (
            <TextInputMask
              {...props}
              value={phone}
              type="cel-phone"
              ref={'phone'}
              onChangeText={(text) => setPhone(text)}
            />
          )}
        />
        <TextInput
          label="Senha"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.contentInput}
          underlineColor={gray}
          secureTextEntry={hidePassword}
          theme={{
            colors: {
              primary: greenLine,
            }
          }}
          right={<TextInput.Icon name="eye" onPress={() => setHidePassword(!hidePassword)} />}
        />

        <Button
          mode="contained"
          style={styles.button}
          onPress={() =>
            signUp(
              name,
              email,
              password,
              file && file.fileData || null,
              phone
            )}
        >
          Criar conta
        </Button>
      </View>
  )
};

export default SignUp;