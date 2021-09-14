import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import MapView, {
  Callout,
  Marker,
  PROVIDER_GOOGLE,
  Region,
} from "react-native-maps";
import Geolocation from '@react-native-community/geolocation';
import { Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';


interface ILocation {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

interface LocationChoose {
  latitude: number;
  longitude: number;
}

interface IProps {
  location?: LocationChoose;
  setLocation(location: LocationChoose | undefined): void;
  setChooseLocation(state: boolean): void;
}

const DefineLocationMatch = ({location, setLocation, setChooseLocation}: IProps) => {
  const [currentRegion, setCurrentRegion] = useState<ILocation | undefined>();
  const [positionChoose, setPositionChoose] = useState<LocationChoose | undefined>();

  useEffect(() => {
    if (location) {
      setPositionChoose(location);
    }
    async function loadInitialLocation() {
      Geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });

      });
    };
    loadInitialLocation();
  }, []);

  const handleRegionComplete = (region: ILocation) => {
    setCurrentRegion(region);
  };

  const handleLocation = (position: LocationChoose) => {
    setPositionChoose(position)
  };

  const handleConfirmLocation = () => {
    setLocation(positionChoose);
    setChooseLocation(false);
  }

  return (
    <View style={styles.container}>
      {
        currentRegion ? (
          <MapView
            onRegionChangeComplete={handleRegionComplete}
            onLongPress={(e) => handleLocation(e.nativeEvent.coordinate)}
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            initialRegion={currentRegion}
          >
            {
              positionChoose && (
                <Marker coordinate={{ latitude: positionChoose!.latitude, longitude: positionChoose!.longitude }} />
              )
            }
          </MapView>
        ) : (
          <ActivityIndicator size="large" color="" />
        )
      }
      <View style={styles.ViewButton}>
        <Button mode='contained' style={styles.button} onPress={() => {handleConfirmLocation()}}>
          Confirmar localização
        </Button>
      </View>
    </View>
  )
};

export default DefineLocationMatch;