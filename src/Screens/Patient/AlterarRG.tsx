import React, { useContext, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, StyleSheet, TextInput, Dimensions, ScrollView, Button, TouchableOpacity, Text } from 'react-native';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import styles from '@/Styles/PatientStyle/AlterarRG';

import { database } from '@/firebaseConfig';
import * as firestore from 'firebase/firestore';
import { PacienteData } from '@/Types/navigation';
import { AuthContext } from '@/Context/AuthContext';


const AlteraçãoRG = ({ navigation }: any) => {
  const [rgValue, setRgValue] = useState('');
  const { user, createUser, signOut } = useContext(AuthContext);
  //const [pacienteData, setPacienteData] = useState<PacienteData>({} as PacienteData)
  const [pacienteData, setPacienteData] = useState<PacienteData | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  const collection = firestore.collection(database, "pacientes")

  const getPaciente = async () => {
    try {
      const query = firestore.query(collection, firestore.where("userId", "==", user?.uid));

      const pacientePayload = await firestore.getDocs(query);

      const pacienteDados = pacientePayload.docs[0].data() as PacienteData;
      setPacienteData(pacienteDados);



    } catch (error) {
      setError("Erro ao buscar paciente");
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    getPaciente()
  }, [])


  const alterarRG = async () => {
    let sucesso = false;
    try {
      const query = firestore.query(collection, firestore.where("userId", "==", user?.uid));
      const pacientePayload = await firestore.getDocs(query);
      const docId = pacientePayload.docs[0].id;

      const doc = firestore.doc(collection, docId);
      await firestore.setDoc(doc, {
        rg: rgValue
      }, { merge: true });

      sucesso = true;
    } catch (error) {
      setError("Erro ao alterar RG");
    } finally {
      setLoading(false);
      if (sucesso) {
        navigation.navigate('MeusDados');
      }
    }
  };






  const handlePressDados = () => {
    navigation.navigate('MeusDados');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.logoContainer}>
          <TouchableOpacity onPress={handlePressDados}>
            <Image
              source={require('@/../assets/Images/ArrowLeftBlue.png')}
              style={styles.ArrowLeftBlue}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('@/../assets/Images/LogoInScreening.png')}
              style={styles.logo}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.dadosTexto}>Alterar RG</Text>
        </View>

        <TextInput
          style={[styles.inputs]}
          placeholder="RG:"
          placeholderTextColor='#0891B2'
          keyboardType='numeric'
          value={rgValue}
          onChangeText={(text) => setRgValue(text)}
        />

        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={[styles.buttonContainer, styles.buttonContent]}
            onPress={alterarRG}
          >
            <Text style={styles.buttonText}>Confirmar Alteração</Text>
            <Image
              source={require('@/../assets/Images/ArrowRightWhite.png')}
              style={styles.setaDireita}
            />
          </TouchableOpacity>

        </View>

      </ScrollView>

    </View>
  );
};

export default AlteraçãoRG;

