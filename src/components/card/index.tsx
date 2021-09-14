import React, { useEffect, useState } from 'react';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { white } from '../../constants/color';
import { styles } from './styles';
import { View, Text } from 'react-native';
import { formatAmount } from '../../helpers/FormatAmount';
import { convertCoordenateInAddress } from '../../helpers/ConvertAddress';
import moment from 'moment';

const CardMatch = ({ match, registrationCancel }: any) => {
  const [address, setAddress] = useState<string>('');

  useEffect(() => {
    async function defineAddress() {
      if (match) {
        const response = await convertCoordenateInAddress(match.location.latitude, match.location.longitude);
        setAddress(response);
      }
    }
    defineAddress()
  }, []);

  return (
    <>
      {
        match ? (
          <Card style={styles.card} >
            < Card.Content >
              <View style={styles.rowTitle}>
                <Title>{match.name}</Title>
                <Text style={styles.commentAmount}>{formatAmount(match.amount)}</Text>
              </View>
              <Paragraph>{address}</Paragraph>
              <Paragraph style={styles.date}>Dia {moment(match.date).format('DD/MM/YYYY')} às {moment(match.date).format('HH:mm')}</Paragraph>
            </Card.Content >
            <Card.Cover style={styles.image} source={{ uri: `data:image/jpeg;base64, ${match.image}` }} />
            <Card.Actions>
              <Button style={styles.buttonCancel} color={white} onPress={() => registrationCancel(match._id)}>Cancelar participação</Button>
            </Card.Actions>
          </Card >
        ) : null
      }
    </>
  )
};

export default CardMatch;