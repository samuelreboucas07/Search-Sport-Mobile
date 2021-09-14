import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import { View, ActivityIndicator, Image, Text } from 'react-native';
import MapView, {
  Callout,
  Marker,
  PROVIDER_GOOGLE,
} from "react-native-maps";
import Geolocation from '@react-native-community/geolocation';
import api from '../../services/api';
import ChooseMatch from '../choosenMatch';
import moment from 'moment';
import { useAuth } from '../../contexts/auth';

interface ILocation {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

interface IProps {
  focus: boolean;
}

const ListMatches = ({ focus }: IProps) => {
  const [initialLocation, setInitialLocation] = useState<ILocation | undefined>();
  const [matches, setMatches] = useState<any[]>([]);
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const [curentMatch, setCurrentMatch] = useState<any>();
  const { user } = useAuth();

  useEffect(() => {
    async function loadInitialLocation() {
      Geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        setInitialLocation({
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });

      });

      const { data } = await api.get(`getAllMatches/${user!._id}`);
      if (data && data.matches) {
        setMatches(data.matches);
      }
    };
    if (focus && !visibleModal) {
      loadInitialLocation();
    }
  }, [focus, visibleModal]);

  const handleChooseMatch = (match: any) => {
    setVisibleModal(true);
    setCurrentMatch(match);
  }

  return (
    <View style={styles.container}>
      {
        initialLocation ? (
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            initialRegion={initialLocation}
          >
            <Marker coordinate={{ latitude: initialLocation!.latitude, longitude: initialLocation!.longitude }} />
            {
              matches && matches.length ? matches.map((match: any) => (
                <Marker key={match._id} coordinate={{ latitude: match!.location!.latitude, longitude: match!.location!.longitude }}>
                  <Image style={styles.avatar} source={{ uri: `data:image/jpeg;base64, ${match.image}` }} />
                  <Callout onPress={() => handleChooseMatch(match)}>
                    <View style={styles.callout}>
                      <Text style={styles.name}>{match.name}</Text>
                      <Text>{match.address}</Text>
                      <Text>Data: {moment(match.date).format('DD/MM/YYYY')}</Text>
                      <Text>Horário: {moment(match.date).format('HH:mm')}</Text>
                    </View>
                  </Callout>
                </Marker>
              )) : null
            }
          </MapView>
        ) : (
          <ActivityIndicator size="large" color="" />
        )
      }
      <ChooseMatch visible={visibleModal} setVisible={setVisibleModal} match={curentMatch}/>
    </View>
  )
};

export default ListMatches;