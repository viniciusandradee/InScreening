import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabNavigator from './PatientArea/BottomTabNavigator';

const Stack = createStackNavigator();

const PatientStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};

export default PatientStackNavigator;
