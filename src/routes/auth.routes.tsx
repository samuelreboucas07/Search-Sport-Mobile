import React from 'react';
import SignIn from './../features/login';

import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
  <AuthStack.Navigator >
    <AuthStack.Screen name='SignIn' component={SignIn} options={{headerShown: false}}/>
  </AuthStack.Navigator>
);

export default AuthRoutes;