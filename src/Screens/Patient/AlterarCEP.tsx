import React, { useContext, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, StyleSheet, TextInput, Dimensions, ScrollView, Button, TouchableOpacity, Text } from 'react-native';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import styles from '@/Styles/PatientStyle/AlterarCEP';

import { database } from '@/firebaseConfig';
import * as firestore from 'firebase/firestore';
import { PacienteData } from '@/Types/navigation';
import { AuthContext } from '@/Context/AuthContext';
import axios from 'axios';


const AlteraçãoCEP = ({ navigation }: any) => {
  const [cepValue, setCepValue] = useState('');
  const [estadoValue, setEstadoValue] = useState('');
  const [municipioValue, setMunicipioValue] = useState('');
  const [numeroValue, setNumeroValue] = useState('');
  const [complementoValue, setComplementoValue] = useState('');
  const [logradouroValue, setLogradouroValue] = useState('');

  const { user } = useContext(AuthContext);

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


  const alterarCep = async () => {
    let sucesso = false;
    try {
      const query = firestore.query(collection, firestore.where("userId", "==", user?.uid));
      const pacientePayload = await firestore.getDocs(query);
      const docId = pacientePayload.docs[0].id;

      const doc = firestore.doc(collection, docId);
      await firestore.setDoc(doc, {
        endereco: {
          cep: cepValue,
          estado: estadoValue,
          logradouro: logradouroValue,
          municipio: municipioValue,
          numero: numeroValue,
          complemento: complementoValue
        }

      }, { merge: true });

      sucesso = true;
    } catch (error) {
      setError("Erro ao alterar Cep");
    } finally {
      setLoading(false);
      if (sucesso) {
        navigation.navigate('MeusDados');
      }
    }
  };


  const goToMeusDados = () => {
    navigation.navigate('MeusDados');
  };



  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.logoContainer}>
          <TouchableOpacity onPress={goToMeusDados}>
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
          <Text style={styles.dadosTexto}>Alterar CEP</Text>
        </View>

        <TextInput
          style={[styles.inputs]}
          placeholder="CEP:"
          placeholderTextColor='#0891B2'
          value={cepValue}
          onChangeText={(text) => setCepValue(text)}
        />

        <TextInput
          style={[styles.inputs]}
          placeholder="Estado:"
          placeholderTextColor='#0891B2'
          value={estadoValue}
          onChangeText={(text) => setEstadoValue(text)}
        />

        <TextInput
          style={[styles.inputs]}
          placeholder="Municipio:"
          placeholderTextColor='#0891B2'
          value={municipioValue}
          onChangeText={(text) => setMunicipioValue(text)}
        />

        <TextInput
          style={[styles.inputs]}
          placeholder="Logradouro:"
          placeholderTextColor='#0891B2'
          value={logradouroValue}
          onChangeText={(text) => setLogradouroValue(text)}
        />

        <TextInput
          style={[styles.inputs]}
          placeholder="Número:"
          placeholderTextColor='#0891B2'
          value={numeroValue}
          onChangeText={(text) => setNumeroValue(text)}
        />
        <TextInput
          style={[styles.inputs]}
          placeholder="Complemento:"
          placeholderTextColor='#0891B2'
          value={complementoValue}
          onChangeText={(text) => setComplementoValue(text)}
        />

        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={[styles.buttonContainer, styles.buttonContent]}
            onPress={alterarCep}
          >
            <Text style={styles.buttonText}>Prosseguir</Text>
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

export default AlteraçãoCEP;

