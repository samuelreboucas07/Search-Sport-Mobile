import React from 'react';
import Home from './../features/home';
import DefineLocationMatch from './../features/locationMatch';

import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

const AppRoutes = () => (
  <AppStack.Navigator>
    <AppStack.Screen name='home' component={Home} />
    <AppStack.Screen name='addLocation' component={DefineLocationMatch} options={{title: 'Adicionar local'}} />
  </AppStack.Navigator>
);

export default AppRoutes;