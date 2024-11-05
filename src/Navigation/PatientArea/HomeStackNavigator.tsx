// src/Navigation/ProfileStackNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TriagemHome from '@/Screens/Patient/TriagemHome';
import AcompanhamentoTriagem from '@/Screens/Patient/AcompanhamentoTriagem';
import NovaTriagem from '@/Screens/Patient/NovaTriagem';


const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TriagemHome" component={TriagemHome} />
      <Stack.Screen name="AcompanhamentoTriagem" component={AcompanhamentoTriagem} />
      <Stack.Screen name="NovaTriagem" component={NovaTriagem} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
