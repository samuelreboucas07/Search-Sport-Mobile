import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import { styles } from './styles';
import { TextInput, Button, Drawer, IconButton } from 'react-native-paper';
import { gray, greenLine } from '../../constants/color';
import DatePickerChosen from '../../components/dateTimerPicker';
import moment from 'moment';
import { chooseFile } from '../../actions/match';
import TitleSection from '../../components/titleSection';
import DefineLocationMatch from '../locationMatch/index';
import api from '../../services/api';
import { useAuth } from '../../contexts/auth';
import { convertCoordenateInAddress } from '../../helpers/ConvertAddress';
import { TextInputMask } from 'react-native-masked-text';

interface ILocation {
  latitude: number;
  longitude: number;
}

interface IProps {
  setIndex(index: number): void;
}

const NewMatch = ({ setIndex }: IProps) => {
  const [name, setName] = useState<string>('');
  const [vacancy, setVacancy] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [date, setDate] = useState<Date>();
  const [open, setOpen] = useState<boolean>(false);
  const [location, setLocation] = useState<ILocation | undefined>(undefined);
  const [choosenLocation, setChooseLocation] = useState<boolean>(false);
  const [file, setFile] = useState<any>();
  const [address, setAddress] = useState<string>('');
  const { user } = useAuth();

  const handleSubmit = async () => {
    if (!name || !vacancy || !amount || !date || !location) {
      //toast
    }
    else {
      const response = await api.post('/createMatch', {
        name,
        vacancy,
        amount,
        date,
        location,
        file: file.fileData || null,
        userId: user!._id
      });
      if (response && response.data) {
        setIndex(1);
      }
    }
  };

  const formatDate = () => {
    return `Dia ${moment(date).format('DD/MM/YYYY')} às ${moment(date).format('HH:mm')}`
  };

  const handleChosenImage = () => {
    chooseFile(setFile);
  };

  useEffect(() => {
    async function getLocationByCoords() {
      if (location) {
        const response = await convertCoordenateInAddress(location!.latitude, location!.longitude);
        setAddress(response);
      }
    }
    getLocationByCoords();
  }, [choosenLocation])

  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      {
        choosenLocation ?
          <DefineLocationMatch location={location} setLocation={setLocation} setChooseLocation={setChooseLocation} /> :
          (
            <View style={styles.container}>
              <TitleSection title='Adicionar partida' style={styles.title} />
              <View style={styles.contentImage}>
                {
                  !file ? (
                    <Image
                      source={require('../../assets/time.png')}
                      style={styles.avatar}
                    />
                  ) : (
                    <Image
                      source={{ uri: `data:image/jpeg;base64, ${file.fileData}` }}
                      style={styles.avatar}
                    />
                  )
                }
                <TouchableOpacity onPress={() => handleChosenImage()} style={styles.buttonChooseImage}>
                  <IconButton
                    icon="folder-image"
                    size={24}
                  />
                  <Text>Adicionar foto</Text>
                </TouchableOpacity>
              </View>
              <TextInput
                label="Nome"
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
              <View style={styles.rowView}>
                <TextInput
                  label="Vagas"
                  keyboardType='numeric'
                  value={vacancy}
                  onChangeText={text => setVacancy(text)}
                  style={styles.contentInputRow}
                  underlineColor={gray}
                  theme={{
                    colors: {
                      primary: greenLine,
                    }
                  }}
                />
                <TextInput
                  label="Valor"
                  keyboardType='numeric'
                  value={amount}
                  style={styles.contentInputRow}
                  underlineColor={gray}
                  theme={{
                    colors: {
                      primary: greenLine,
                    }
                  }}
                  render={(props) => (
                    <TextInputMask
                      {...props}
                      value={amount}
                      type="money"
                      ref={'money'}
                      onChangeText={(text: string) => setAmount(text)}
                    />
                  )}
                />
              </View>

              <Drawer.Item
                style={styles.dateItem}
                icon="calendar"
                label={date ? formatDate() : 'Clique aqui para escolher a data'}
                onPress={() => setOpen(true)}
              />

              <Drawer.Item
                style={styles.dateItem}
                icon="google-maps"
                label={location ? address : 'Clique aqui para escolher endereço.'}
                onPress={() => { setChooseLocation(true) }}
              />

              <DatePickerChosen open={open} date={date ? date : new Date()} setOpen={setOpen} setDate={setDate} />
              <View style={{ marginTop: 70 }}>
                <Button mode="text" style={styles.buttonSubmit} color={greenLine} onPress={() => handleSubmit()}>Criar Partida</Button>
              </View>
            </View>
          )
      }


    </KeyboardAvoidingView>

  )
};

export default NewMatch;