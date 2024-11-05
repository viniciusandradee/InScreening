import React, { useContext, useEffect, useState } from 'react';

import { View, Image, StyleSheet, Dimensions, Button, TouchableOpacity, Text } from 'react-native';

import { useFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '@/Context/AuthContext';

import * as firestore from 'firebase/firestore';

import styles from '@/Styles/PatientStyle/TriagemHome';
import { database } from '@/firebaseConfig';
import { PacienteData } from '@/Types/navigation';


const TriagemHome = ({ navigation }: any) => {

  const [pacienteData, setPacienteData] = useState<PacienteData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { user } = useContext(AuthContext);


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


  const handlePressNovaTriagem = () => {
    navigation.navigate('NovaTriagem');
  };
  const handlePressAcompanhamento = () => {
    navigation.navigate('AcompanhamentoTriagem');
  };


  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <TouchableOpacity>
          <Image
            source={require('@/../assets/Images/LogoInScreening.png')}
            style={styles.logo}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.olaTexto}>Olá, {pacienteData?.nome}!</Text>

      </View>

      <View style={styles.allButtons}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handlePressNovaTriagem}
        >
          <Image
            source={require('@/../assets/Images/TriagemIconWhite.png')}
            style={styles.iconesInput}
          />
          <Text style={styles.buttonText}>Realizar triagem</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonContainer2}
          onPress={handlePressAcompanhamento}
        >

          <Text style={styles.buttonText}>Acompanhamento</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
};

export default TriagemHome;

