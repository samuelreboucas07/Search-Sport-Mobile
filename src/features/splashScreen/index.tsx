import React from 'react';
import LottieView from 'lottie-react-native';
import { Text } from 'react-native';

const SplashScreen = () => {
  return (
    <LottieView source={require('./../../assets/screen.json')} autoPlay loop />
  )
};

export default SplashScreen;