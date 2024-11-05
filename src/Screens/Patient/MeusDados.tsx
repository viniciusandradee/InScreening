import React, { useState, useEffect, useContext } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { View, Image, StyleSheet, Dimensions, ScrollView, Button, TouchableOpacity, Text } from 'react-native';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import { useRoute } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PacienteData } from '@/Types/navigation';

import styles from '@/Styles/PatientStyle/MeusDados';
import { AuthContext } from '@/Context/AuthContext';
import { database } from '@/firebaseConfig';
import * as firestore from 'firebase/firestore';


const MeusDados = ({ navigation, route }: any) => {

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
        getPaciente();
      }, [navigation, user?.uid]);


      useFocusEffect(
        React.useCallback(() => {
          getPaciente();
        }, [getPaciente])
      );
      
    const handlePressAlterarCEP = () => {
        navigation.navigate('AlterarCEP');
    };
    const handlePressAlterarEmail = async () => {
        navigation.navigate('AlterarEmail');
        await getPaciente();
    };
    const handlePressAlterarRG = async () => {
        navigation.navigate('AlterarRG');
        await getPaciente();
    };


    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.logoContainer}>
                    <TouchableOpacity>
                        <Image
                            source={require('@/../assets/Images/LogoInScreening.png')}
                            style={styles.logo}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.dadosTexto}>Meus Dados</Text>
                </View>

                <View>
                    <Text style={styles.infos}>Dados Pessoais</Text>

                    
                        <View style={styles.caixaDados}>
                            <View style={styles.dadosContainer}>
                                <Text style={styles.dadosLabel}>Nome: <Text style={styles.data}>{pacienteData?.nome}</Text></Text>
                                <TouchableOpacity>
                                    <Image
                                        source={require('@/../assets/Images/LockIcon.png')}
                                        style={styles.lockIcon}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.dadosContainer}>
                                <Text style={styles.dadosLabel}>CPF: <Text style={styles.data}>{pacienteData?.cpf}</Text></Text>
                                <TouchableOpacity>
                                    <Image
                                        source={require('@/../assets/Images/LockIcon.png')}
                                        style={styles.lockIcon}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.dadosContainer}>
                                <Text style={styles.dadosLabel}>Email: <Text style={styles.data}>{user?.email}</Text></Text>
                                <TouchableOpacity>
                                    <Image
                                        source={require('@/../assets/Images/LockIcon.png')}
                                        style={styles.lockIcon}
                                    />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.dadosContainer}>
                                <Text style={styles.dadosLabel}>RG: <Text style={styles.data}>{pacienteData?.rg}</Text></Text>
                                <TouchableOpacity onPress={handlePressAlterarRG}>
                                    <Image
                                        source={require('@/../assets/Images/EditIcon.png')}
                                        style={styles.editIcon}
                                    />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.dadosContainer}>
                                <Text style={styles.dadosLabel}>Filiação Paterna: <Text style={styles.data}>{pacienteData?.filiacaoPaterna}</Text></Text>
                                <TouchableOpacity>
                                    <Image
                                        source={require('@/../assets/Images/LockIcon.png')}
                                        style={styles.lockIcon}
                                    />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.dadosContainer}>
                                <Text style={styles.dadosLabel}>Filiação Materna: <Text style={styles.data}>{pacienteData?.filiacaoMaterna}</Text></Text>
                                <TouchableOpacity>
                                    <Image
                                        source={require('@/../assets/Images/LockIcon.png')}
                                        style={styles.lockIcon}
                                    />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.dadosContainer}>
                                <Text style={styles.dadosLabel}>Sexo: <Text style={styles.data}>{pacienteData?.sexo}</Text></Text>
                                <TouchableOpacity>
                                    <Image
                                        source={require('@/../assets/Images/LockIcon.png')}
                                        style={styles.lockIcon}
                                    />
                                </TouchableOpacity>

                            </View>
                        </View>
                    
                </View>

                <View>
                    <Text style={styles.infos}>Endereço</Text>

                    <View style={styles.caixaDados}>
                        <View style={styles.dadosContainer}>
                            <Text style={styles.dadosLabel}>CEP: <Text style={styles.data}>{pacienteData?.endereco.cep}</Text></Text>
                            <TouchableOpacity onPress={handlePressAlterarCEP}>
                                <Image
                                    source={require('@/../assets/Images/EditIcon.png')}
                                    style={styles.editIcon}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.dadosContainer}>
                            <Text style={styles.dadosLabel}>Rua: <Text style={styles.data}>{pacienteData?.endereco.logradouro}</Text></Text>
                            <TouchableOpacity onPress={handlePressAlterarCEP}>
                                <Image
                                    source={require('@/../assets/Images/EditIcon.png')}
                                    style={styles.editIcon}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.dadosContainer}>
                            <Text style={styles.dadosLabel}>Cidade: <Text style={styles.data}>{pacienteData?.endereco.municipio}</Text></Text>
                            <TouchableOpacity onPress={handlePressAlterarCEP}>
                                <Image
                                    source={require('@/../assets/Images/EditIcon.png')}
                                    style={styles.editIcon}
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.dadosContainer}>
                            <Text style={styles.dadosLabel}>Estado: <Text style={styles.data}>{pacienteData?.endereco.estado}</Text></Text>
                            <TouchableOpacity onPress={handlePressAlterarCEP}>
                                <Image
                                    source={require('@/../assets/Images/EditIcon.png')}
                                    style={styles.editIcon}
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.dadosContainer}>
                            <Text style={styles.dadosLabel}>Complemento: <Text style={styles.data}>{pacienteData?.endereco.complemento}</Text></Text>
                            <TouchableOpacity onPress={handlePressAlterarCEP}>
                                <Image
                                    source={require('@/../assets/Images/EditIcon.png')}
                                    style={styles.editIcon}
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.dadosContainer}>
                            <Text style={styles.dadosLabel}>Número: <Text style={styles.data}>{pacienteData?.endereco.numero}</Text></Text>
                            <TouchableOpacity onPress={handlePressAlterarCEP}>
                                <Image
                                    source={require('@/../assets/Images/EditIcon.png')}
                                    style={styles.editIcon}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <TouchableOpacity onPress={signOut}>
                    <Text style={styles.logout}>Sign Out</Text>
                </TouchableOpacity>

            </ScrollView>

        </View>
    );
};

export default MeusDados;
