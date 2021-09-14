import React, { useEffect, useRef, useState } from 'react';
import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';
import { error, white } from '../../constants/color';
import { styles } from './styles';
import { View, Image } from 'react-native';
import { formatAmount } from '../../helpers/FormatAmount';
import { convertCoordenateInAddress } from '../../helpers/ConvertAddress';
import TitleSection from '../../components/titleSection';
import moment from 'moment';
import api from '../../services/api';
import { useAuth } from '../../contexts/auth';

interface IProps {
  visible: boolean,
  setVisible(value: boolean): void,
  match: any
}

const ChooseMatch = ({ visible, setVisible, match }: IProps) => {
  const [address, setAddress] = useState<string>('');
  const { user } = useAuth();

  const hideModal = () => setVisible(false);

  useEffect(() => {
    async function getLocation() {
      const response = await convertCoordenateInAddress(match.location.latitude, match.location.longitude);
      setAddress(response);
    }
    if (match) {
      getLocation();
    }
  }, [match]);

  const handleSubmit = async () => {
    try {
      await api.post('confirmPresence', {
        match: match._id,
        user: user!._id
      });

      hideModal();
    } catch (e: any) {

    }
  };

  return (
    <Provider>
      <Portal>
        {
          match ? (
            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.container}>
              <View style={styles.contentImage}>
                <Image style={styles.image} source={{ uri: `data:image/jpeg;base64, ${match.image}` }} />
              </View>
              <TitleSection title={'Informações importantes:'} style={styles.title} />
              <View style={styles.contentInfo}>
                <Text style={styles.nameMatch}>{match.name}</Text>
                <View style={styles.contentDate}>
                  <Text>
                    <Text style={styles.titleItem}>
                      Data:&nbsp;&nbsp;
                    </Text>
                    {moment(match.date).format('DD/MM/YYYY')}
                  </Text>

                  <Text>
                    <Text style={styles.titleItem}>
                      Hora:&nbsp;&nbsp;
                    </Text>
                    {moment(match.date).format('HH:mm')}
                  </Text>
                </View>
                <Text>
                  <Text style={styles.titleItem}>
                    Vagas disponíveis:&nbsp;&nbsp;
                  </Text> {match.availableVacancies}
                </Text>
                <Text style={styles.amount}>
                  <Text style={styles.titleItem}>
                    Valor:&nbsp;&nbsp;
                  </Text>
                  {formatAmount(match.amount)}
                </Text>
                <Text>
                  <Text style={styles.titleItem}>
                    Endereço:&nbsp;&nbsp;
                  </Text>
                  {address}
                </Text>
              </View>
              <View style={styles.contentButton}>

                <Button
                  mode='outlined'
                  style={styles.buttonParticipate}
                  color={white} onPress={handleSubmit}
                  disabled={match.userCurrentRegistered || !match.availableVacancies ? true : false}
                >
                  {
                    match.userCurrentRegistered
                      ? 'Já cadastrado!' :
                      (
                        match.availableVacancies
                          ? 'Participar'
                          : 'Vagas esgotadas!'
                      )
                  }

                </Button>
                <Button mode="outlined" style={styles.buttonCancel} color={error} onPress={hideModal}>Cancelar</Button>
              </View>
            </Modal>
          ) : null
        }

      </Portal>
    </Provider>
  )
};

export default ChooseMatch;