import React from 'react';
import SignIn from './../features/login';
import SignUp from '../features/signUp';

import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
  <AuthStack.Navigator >
    <AuthStack.Screen name='SignIn' component={SignIn} options={{ headerShown: false }} />
    <AuthStack.Screen name='SignUp' component={SignUp} options={{ title: 'Criar conta'}} />
  </AuthStack.Navigator>
);

export default AuthRoutes;