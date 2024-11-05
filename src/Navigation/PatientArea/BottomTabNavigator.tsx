import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeStackNavigator from './HomeStackNavigator';
import ProfileStackNavigator from './ProfileStackNavigator';
import AcompanhamentoTriagem from '@/Screens/Patient/AcompanhamentoTriagem';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    let iconName;
                    let iconStyle;

                    if (route.name === 'HomeTab') {
                        iconName = focused ? require('../../../assets/Images/HomeSelected.png') : require('../../../assets/Images/Home.png');
                        iconStyle = focused ? styles.homeIconSelected : styles.homeIcon;
                    } else if (route.name === 'TriagemTab') {
                        iconName = focused ? require('../../../assets/Images/ListTriagemSelected.png') : require('../../../assets/Images/ListTriagemBlue.png');
                        iconStyle = focused ? styles.triagemIconSelected : styles.triagemIcon;
                    } else if (route.name === 'ProfileTab') {
                        iconName = focused ? require('../../../assets/Images/PersonIconSelected.png') : require('../../../assets/Images/PersonIconBlue.png');
                        iconStyle = focused ? styles.profileIconSelected : styles.profileIcon;
                    }

                    return <Image source={iconName} style={iconStyle} />;
                },
                tabBarStyle: {
                    backgroundColor: '#233DE1',
                    height: '9%',
                    justifyContent: 'center',
                    paddingTop: 20,
                },
                tabBarLabel: '',
                headerShown: false,
                tabBarBackground: () => (
                    <Image
                      source={require('../../../assets/Images/whiteScreen.png')}
                      style={{ width: '100%', height: '100%' }}
                    />
                  ),
            })}
        >
            <Tab.Screen name="HomeTab" component={HomeStackNavigator} />
            <Tab.Screen name="TriagemTab" component={AcompanhamentoTriagem} />
            <Tab.Screen name="ProfileTab" component={ProfileStackNavigator} />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    homeIcon: {
        width: 45,
        height: 55,
    },
    homeIconSelected: {
        width: 65,
        height: 65,
    },
    triagemIcon: {
        width: 40,
        height: 50,
    },
    triagemIconSelected: {
        width: 45,
        height: 55,
    },
    profileIcon: {
        width: 45,
        height: 45,
    },
    profileIconSelected: {
        width: 55,
        height: 55,
    },
});

export default BottomTabNavigator;
