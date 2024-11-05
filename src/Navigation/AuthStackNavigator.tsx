// AuthStackNavigator.tsx
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Login from '@/Screens/Auth/Login';
import Register from '@/Screens/Auth/Register';

const Stack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
