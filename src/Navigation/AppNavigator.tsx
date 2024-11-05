// AppNavigator.tsx
import React, { useContext } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { AuthContext } from '@/Context/AuthContext';

import AuthStackNavigator from './AuthStackNavigator';
import PatientStackNavigator from './PatientStackNavigator';


const AppNavigator = () => {
  
  const { user } = useContext(AuthContext);

  return (

    <NavigationContainer>
      {(user !== null) ?
        <PatientStackNavigator/> :  <AuthStackNavigator />
      }
    </NavigationContainer>
  );
};

export default AppNavigator;
