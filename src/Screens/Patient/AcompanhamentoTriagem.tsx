import React, { useState, useEffect, useContext } from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ActivityIndicator, FlatList, ScrollView } from 'react-native';
import { format } from 'date-fns';

import { View, Image, StyleSheet, Dimensions, Button, TouchableOpacity, Text } from 'react-native';

import { useFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import { useNavigation } from '@react-navigation/native';

import styles from '@/Styles/PatientStyle/AcompanhamentoTriagem';

import { database } from '@/firebaseConfig';
import * as firestore from 'firebase/firestore';


import { PacienteData, TriagemData } from '@/Types/navigation';
import { AuthContext } from '@/Context/AuthContext';



const AcompanhamentoTriagem = ({ navigation }: any) => {
  const { user } = useContext(AuthContext);


  const [pacienteData, setPacienteData] = useState<PacienteData | null>(null);
  const [triagensData, setTriagensData] = useState<TriagemData[]>([]);
  const [formattedDates, setFormattedDates] = useState<{ dataInicio: string, dataFim: string }>({ dataInicio: '', dataFim: '' });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  const pacientesCollection = firestore.collection(database, "pacientes");
  const triagensCollection = firestore.collection(database, "triagens");

  const getPaciente = async () => {
    try {
      const query = firestore.query(pacientesCollection, firestore.where("userId", "==", user?.uid));
      const pacientePayload = await firestore.getDocs(query);

      if (!pacientePayload.empty) {
        const pacienteDados = pacientePayload.docs[0].data() as PacienteData;
        setPacienteData(pacienteDados);
      }
    } catch (error) {
      setError("Erro ao buscar paciente");
    }
  };

  const getTriagens = async () => {
    try {
      const query = firestore.query(triagensCollection, firestore.where("paciente.nome", "==", pacienteData?.nome));
      const triagemPayload = await firestore.getDocs(query);

      const triagens = triagemPayload.docs.map(doc => doc.data() as TriagemData);
      setTriagensData(triagens);
    } catch (error) {
      setError("Erro ao buscar triagens");
    }
  };

  useEffect(() => {
    if (user?.uid) {
      getPaciente();
    }
  }, [user]);

  useEffect(() => {
    if (pacienteData) {
      getTriagens();
    }
  }, [pacienteData]);

  const handlePressTriagemHome = () => {
    navigation.navigate('TriagemHome');
  };

  const renderTriagem = ({ item }: { item: TriagemData }) => (
    <View style={styles.caixaDados}>
      <View style={styles.dadosContainer}>
        <Text style={styles.dadosLabel}>Data início: <Text style={styles.data}>{item.dataInicio ? new Date(item.dataInicio).toLocaleDateString() : 'N/A'}</Text></Text>
      </View>


      <View style={styles.dadosContainer}>
        <Text style={styles.dadosLabel}>Hospital: <Text style={styles.data}>{item.hospital || 'N/A'}</Text></Text>
      </View>

      <View style={styles.dadosContainer}>
        <Text style={styles.dadosLabel}>Sintomas: <Text style={styles.data}>{item.sintomas || 'N/A'}</Text></Text>
      </View>

      <View style={styles.dadosContainer}>
        <Text style={styles.dadosLabel}>Prioridade: <Text style={styles.data}>{item.prioridade || 'N/A'}</Text></Text>
      </View>

      <View style={styles.dadosContainer}>
        <Text style={styles.dadosLabel}>Situação: <Text style={styles.data}>{item.situacao || 'N/A'}</Text></Text>
      </View>
    </View>
  );


  return (
    <View style={styles.container}>

        <View style={styles.logoContainer}>
          <TouchableOpacity onPress={handlePressTriagemHome}>
            <Image source={require('@/../assets/Images/ArrowLeftBlue.png')} style={styles.ArrowLeftBlue} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('@/../assets/Images/LogoInScreening.png')} style={styles.logo} />
          </TouchableOpacity>
        </View>

        <View style={styles.textContainer}>
          <Image source={require('@/../assets/Images/TriagemIconBlue.png')} style={styles.iconTriagem} />
          <Text style={styles.olaTexto}>Triagem</Text>
        </View>


        <View style={styles.caixaNome}>
          <Text style={styles.dadosNome}>{pacienteData?.nome}</Text>
        </View>



        <FlatList
          data={triagensData}
          renderItem={renderTriagem}
          keyExtractor={(item, index) => index.toString()}
        />

      </View>
  );
};

export default AcompanhamentoTriagem;