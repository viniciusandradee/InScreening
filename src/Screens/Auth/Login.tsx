import React, { useState } from 'react';

import { View, Image, StyleSheet, Dimensions, TouchableOpacity, Text, Alert } from 'react-native';
import { Button, TextInput } from "react-native-paper";

import { useFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';

import styles from '@/Styles/AuthStyle/login';
import {colors, fonts} from '@/Styles/variables';

import { useNavigation } from '@react-navigation/native';

import { AuthNavigation } from '@/Types/navigation';

import { auth } from '@/firebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDialog } from '@/Hooks/useDialog';

const windowWidth = Dimensions.get('window').width;


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation<AuthNavigation>();

  const { showDialog, Dialog } = useDialog();
  
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <View />;
  }


  const doAuth = async () => {

    if (!email || !password ) {
      Alert.alert("Alerta", "Preencha todos os campos");
      return;
    }


    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      Alert.alert("Erro", "Algo de errado não está certo");
    }
  };

  const goToRegister = () => {
    navigation.navigate("Register");
  };


  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
          <Image source={require('@/../assets/Images/LogoInScreening.png')} style={styles.logo} />
      </View>

      <View style={styles.loginInfos}>
        <Image
          source={require('@/../assets/Images/PersonIconBlue.png')}
          style={styles.personIcon}
        />
        <Text style={styles.textoLogin}>Login</Text>
      </View>

      <View >
        <TextInput
          style={[styles.inputs]}
          placeholder="Email:"
          placeholderTextColor={colors.blueInput}
          multiline={false}
          //numberOfLines={1}
          textAlignVertical="top"
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.inputs}
          placeholder="Senha:"
          placeholderTextColor={colors.blueInput}
          multiline={false}
          //numberOfLines={1}
          textAlignVertical="top"
          secureTextEntry
          onChangeText={setPassword}
        />

      

        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={doAuth}
          >
            <Text style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>
        </View>


        <Text style={styles.semConta}>Não possui conta?</Text>
        <Text style={styles.cadastrar} onPress={goToRegister}>Cadastre-se aqui</Text>
      </View>
      <View style={styles.parteInferior}></View>
    </View>
  );
};

export default Login;