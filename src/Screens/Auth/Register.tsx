import React, { useContext, useState } from 'react';


import { View, Image, StyleSheet, ScrollView, Platform, Dimensions, Alert, TouchableOpacity, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { TextInput, Button } from "react-native-paper";

import axios from 'axios';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';

import styles from '@/Styles/AuthStyle/register'
import { colors, fonts } from '@/Styles/variables';

import { useNavigation } from '@react-navigation/native';
import { AuthNavigation } from '@/Types/navigation';

import { AuthContext } from "@/Context/AuthContext";
import { PacienteData } from '@/Types/navigation';


const windowWidth = Dimensions.get('window').width;


const Register = () => {
    const navigation = useNavigation<AuthNavigation>();
    const { createUser } = useContext(AuthContext);
    const [pacienteData, setPacienteData] = useState<PacienteData>({} as PacienteData);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState({
        logradouro: '',
        municipio: '',
        estado: '',
        complemento: '',
        numero: '',
        cep: ''
    });

    const handleCEPChange = async (cep: string) => {
        try {
            const {data} = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            setEndereco({
                logradouro: data.logradouro,
                municipio: data.localidade,
                estado: data.uf,
                complemento: data.complemento,
                numero: '',
                cep: cep
            });
        } catch (error) {
            console.error('Erro ao buscar o CEP:', error);
            Alert.alert('Erro ao buscar o CEP');
        }
    };

    const handleCEPInput = (text: string) => {
        const formattedText = text.replace(/[^0-9]/g, '');

        // Adicionar o hífen se tiver digitado os primeiros cinco dígitos
        let formattedCEP = formattedText;
        if (formattedText.length >= 5) {
            formattedCEP = formattedText.substring(0, 5) + '-' + formattedText.substring(5, 8);
        }

        setCep(formattedCEP);
        if (formattedText.length === 8) {
            handleCEPChange(formattedText);
        }
    };




    // DATA DE NASCIMENTO
    const [dateOfBirth, setDateOfBirth] = useState('');

    const today = new Date();
    const minDate = new Date(1910, 0, 1)

    const handleDateChange = (text: string) => {
        // Remove todos os caracteres que não são números
        const formattedText = text.replace(/\D/g, '');

        // Verifica se o campo está vazio
        if (formattedText === '') {
            setDateOfBirth('');
            return;
        }

        // Adiciona as barras automaticamente após o usuário digitar o dia e o mês
        if (formattedText.length <= 2) {
            setDateOfBirth(formattedText);
        } else if (formattedText.length <= 4) {
            setDateOfBirth(formattedText.substring(0, 2) + '/' + formattedText.substring(2));
        } else {
            setDateOfBirth(formattedText.substring(0, 2) + '/' + formattedText.substring(2, 4) + '/' + formattedText.substring(4, 8));
        }
    };


    const validateForm = () => {

        const isValid =
            email !== '' &&
            password !== '' &&
            confirmPassword !== '' &&
            password === confirmPassword &&
            pacienteData.nome !== '' &&
            pacienteData.cpf !== '' &&
            pacienteData.rg !== '' &&
            pacienteData.filiacaoPaterna !== '' &&
            pacienteData.filiacaoMaterna !== '' &&
            dateOfBirth !== '' &&
            pacienteData.sexo !== '' &&
            endereco.logradouro !== '' &&
            endereco.municipio !== '' &&
            endereco.estado !== '' &&
            endereco.numero !== '' &&
            endereco.cep !== '';

        return isValid;
    };

    const doCreateUser = async () => {

        if (!validateForm()) {
            Alert.alert("Erro", "Preencha todos os campos obrigatórios.");
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert("Erro", "As senhas não coincidem");
            return;
        }


        const pacientePayload = {
            ...pacienteData,
            endereco,
            sexo: pacienteData.sexo?.toUpperCase(),
        };

        try {

            await createUser(email, password, pacientePayload);
            Alert.alert("Sucesso", "Conta criada com sucesso!");

        } catch (error) {
            console.error('Erro ao criar a conta:', error);
            console.log(pacienteData.email)
            Alert.alert("Erro", "Não foi possível criar a conta.");
        }
    };

    const handleInputChange = (field: keyof PacienteData, value: string) => {
        setPacienteData({ ...pacienteData, [field]: value });
    };



    // NAVEGAÇÃO

    const goToLogin = () => {
        navigation.navigate('Login');
    };

    return (

        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <TouchableOpacity onPress={goToLogin}>
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

                <View >
                    <Text style={styles.CadastroTexto}>Cadastro</Text>
                    <View>
                        <Text style={styles.DadosPessoais}>Dados Pessoais</Text>
                        <TextInput
                            style={[styles.inputs]}
                            placeholder="Nome:"
                            placeholderTextColor={colors.blueInput}
                            value={pacienteData.nome}
                            onChangeText={(value) => handleInputChange('nome', value)}
                        />

                        <TextInput
                            style={styles.inputs}
                            placeholder="CPF:"
                            placeholderTextColor={colors.blueInput}
                            keyboardType="numeric"
                            value={pacienteData.cpf}
                            onChangeText={(value) => handleInputChange('cpf', value)}
                        />
                        <TextInput
                            style={styles.inputs}
                            placeholder="Email:"
                            placeholderTextColor={colors.blueInput}
                            keyboardType="email-address"
                            value={email}
                            onChangeText={setEmail}
                        />
                        <TextInput
                            style={styles.inputs}
                            placeholder="Senha:"
                            placeholderTextColor={colors.blueInput}
                            secureTextEntry={true}
                            onChangeText={setPassword}
                        />

                        <TextInput
                            style={styles.inputs}
                            placeholder="Confirmar Senha:"
                            placeholderTextColor={colors.blueInput}
                            secureTextEntry={true}
                            onChangeText={setConfirmPassword}
                        />

                        <View style={styles.inputsDuplosContainer}>
                            <TextInput
                                style={styles.inputsDuplos}
                                placeholder="RG:"
                                placeholderTextColor={colors.blueInput}
                                keyboardType="numeric"
                                value={pacienteData.rg}
                                onChangeText={(value) => handleInputChange('rg', value)}
                            />
                            <TextInput
                                style={styles.inputsDuplos}
                                placeholder="Orgão Emissor:"
                                placeholderTextColor={colors.blueInput}
                            />
                        </View>

                        <TextInput
                            style={styles.inputs}
                            placeholder="Filiação paterna:"
                            placeholderTextColor={colors.blueInput}
                            value={pacienteData.filiacaoPaterna}
                            onChangeText={(value) => handleInputChange('filiacaoPaterna', value)}
                        />

                        <TextInput
                            style={styles.inputs}
                            placeholder="Filiação materna:"
                            placeholderTextColor={colors.blueInput}
                            value={pacienteData.filiacaoMaterna}
                            onChangeText={(value) => handleInputChange('filiacaoMaterna', value)}
                        />

                        <TextInput
                            style={[styles.inputs]}
                            placeholder="Data de nascimento (DD/MM/AAAA)"
                            placeholderTextColor={colors.blueInput}
                            value={dateOfBirth}
                            onChangeText={(text) => handleDateChange(text)}
                            maxLength={10}
                            keyboardType="numeric"
                        />

                        <Picker
                            style={[styles.inputs, { color: '#0891B2' }]}
                            selectedValue={pacienteData.sexo}
                            onValueChange={(itemValue) => {
                                const sexo = itemValue.toUpperCase(); // Convertendo para letras maiúsculas
                                handleInputChange('sexo', sexo); // Atualiza o estado pacienteData.sexo com o valor selecionado
                            }}
                        >
                            <Picker.Item label="Selecione o sexo" value="" />
                            <Picker.Item label="Masculino" value="MASCULINO" />
                            <Picker.Item label="Feminino" value="FEMININO" />
                        </Picker>

                    </View>

                    <View>
                        <Text style={styles.Endereco}>Endereço</Text>
                        <TextInput
                            style={styles.inputs}
                            placeholder="CEP:"
                            placeholderTextColor={colors.blueInput}
                            keyboardType="numeric"
                            value={cep}
                            onChangeText={handleCEPInput}
                        />
                        <TextInput
                            style={styles.inputs}
                            placeholder="Rua:"
                            placeholderTextColor={colors.blueInput}
                            value={endereco.logradouro}
                            onChangeText={(logradouro) => setEndereco({ ...endereco, logradouro })}
                        />
                        <View style={styles.inputsDuplosContainer}>
                            <TextInput
                                style={styles.inputsDuplos}
                                placeholder="Cidade:"
                                placeholderTextColor={colors.blueInput}
                                value={endereco.municipio}
                                onChangeText={(municipio) => setEndereco({ ...endereco, municipio })}
                            />
                            <TextInput
                                style={styles.inputsDuplos}
                                placeholder="Estado:"
                                placeholderTextColor={colors.blueInput}
                                value={endereco.estado}
                                onChangeText={(estado) => setEndereco({ ...endereco, estado })}
                            />
                        </View>

                        <View style={styles.inputsDuplosContainer}>
                            <TextInput
                                style={styles.inputsDuplos}
                                placeholder="Complemento:"
                                placeholderTextColor={colors.blueInput}
                                value={endereco.complemento}
                                onChangeText={(complemento) => setEndereco({ ...endereco, complemento })}
                            />
                            <TextInput
                                style={styles.inputsDuplos}
                                placeholder="Número:"
                                placeholderTextColor={colors.blueInput}
                                value={endereco.numero}
                                onChangeText={(numero) => setEndereco({ ...endereco, numero })}
                            />
                        </View>
                    </View>

                    <View style={styles.buttonWrapper}>
                        <TouchableOpacity
                            style={styles.buttonContainer}
                            onPress={doCreateUser}
                        >
                            <Text style={styles.buttonText}>Cadastrar Dados</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.loginExistente}>Já possui conta?</Text>
                    <Text onPress={goToLogin} style={styles.logar}>Logar aqui</Text>
                </View>
            </View >
        </ScrollView >
    );
};

export default Register;
