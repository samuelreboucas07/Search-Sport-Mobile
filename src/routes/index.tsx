import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import { useAuth } from './../contexts/auth';

const Routes = () => {
  const { signed, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="" />
      </View>
    )
  }
  return signed ? <AppRoutes /> : <AuthRoutes />
};

export default Routes;