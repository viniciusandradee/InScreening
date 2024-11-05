// src/Navigation/ProfileStackNavigator.tsx
import React from 'react';
import { ImageBackground } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import MeusDados from '@/Screens/Patient/MeusDados';
import AlterarCEP from '@/Screens/Patient/AlterarCEP';

import AlterarRG from '@/Screens/Patient/AlterarRG';

const Stack = createStackNavigator();

const ProfileStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MeusDados" component={MeusDados} />
            <Stack.Screen name="AlterarCEP" component={AlterarCEP} />
            <Stack.Screen name="AlterarRG" component={AlterarRG} />

        </Stack.Navigator>

    );
};

export default ProfileStackNavigator;
