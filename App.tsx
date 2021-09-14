import 'react-native-gesture-handler';
import React from 'react';

import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/contexts/auth';

const App = () => {
  console.disableYellowBox = true;
  return (
    <NavigationContainer>
      <AuthProvider>
          <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
