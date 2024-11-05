import React, { useState, useEffect, useContext } from "react";
import { ActivityIndicator, Alert } from "react-native";
import {
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    Text,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { CheckBox } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";
import { PacienteData, TriagemData } from "@/Types/navigation";
import styles from "@/Styles/PatientStyle/NovaTriagem";
import { AuthContext } from "@/Context/AuthContext";
import * as firestore from "firebase/firestore";
import { database } from "@/firebaseConfig";

const NovaTriagem = ({ navigation }: any) => {
    const [pacienteData, setPacienteData] = useState<PacienteData | null>(null);
    const [triagemData, setTriagemData] = useState<TriagemData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [selectedHospital, setSelectedHospital] = useState(null);
    const [hospitalLocation, setHospitalLocation] = useState(null);

    const { user, createTriagem } = useContext(AuthContext);
    const collection = firestore.collection(database, "pacientes");

    const getPaciente = async () => {
        try {
            const query = firestore.query(
                collection,
                firestore.where("userId", "==", user?.uid)
            );

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
    }, []);



    const handlePressTriagemHome = () => {
        navigation.navigate("TriagemHome");
    };

    // Dados dos hospitais com suas coordenadas
    const hospitais = [
        { label: "Hospital Santa Cruz", value: "Hospital Santa Cruz", coords: { latitude: -23.565218932639578, longitude: -46.62203925963945 } }, // Cambuci
        { label: "Hospital Villa Lobos", value: "Hospital Villa Lobos", coords: { latitude: -23.56051839297533, longitude: -46.58990111618763 } }, // Mooca
        { label: "Hospital São Camilo SP", value: "Hospital São Camilo SP", coords: { latitude: -23.532634047519515, longitude: -46.688297046674826 } }, // Pompeia
        { label: "Hospital CEMA", value: "Hospital CEMA", coords: { latitude: -23.54188867609096, longitude: -46.58068781161381 } }, // Belenzinho
        { label: "Hospital Luz Vila Mariana", value: "Hospital Luz Vila Mariana", coords: { latitude: -23.580859079035992, longitude: -46.639419793006404 } }, // Vila Mariana
    ];

    const handleHospitalChange = (value: string) => {
        const hospital = hospitais.find(h => h.value === value);
        setSelectedHospital(hospital);
        setHospitalLocation(hospital ? hospital.coords : null);
    };

    // SINTOMAS
    const sintomas = [
        { label: "Febre", value: "Febre" },
        { label: "Dor Muscular", value: "Dor Muscular" },
        { label: "Pressão Baixa", value: "Pressão Baixa" },
        { label: "Tosse", value: "Tosse" },
        { label: "Dor no Peito", value: "Dor no Peito" },
        { label: "Congestão Nasal", value: "Congestão Nasal" },
        { label: "Falta de Ar", value: "Falta de Ar" },
    ];

    const [sintomasSelecionados, setSintomasSelecionados] = useState({});

    const handleRealizarTriagem = async () => {
        const sintomasSelecionadosArray = Object.keys(sintomasSelecionados).filter(key => sintomasSelecionados[key]);

        const triagemData: TriagemData = {
            dataInicio: new Date().toISOString(),
            sintomas: sintomasSelecionadosArray.join(", "),
            situacao: "Pendente",
            hospital: selectedHospital?.label || "",
            prioridade: sintomasSelecionadosArray.length >= 3 ? "Alta" : "Normal",
            paciente: {
                nome: pacienteData?.nome || "",
            },
        };

        try {
            await createTriagem(triagemData);
            navigation.navigate("AcompanhamentoTriagem");
        } catch (error) {
            setError("Erro ao registrar triagem");
            Alert.alert("Algo está errado, tente novamente.")
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.logoContainer}>
                    <TouchableOpacity onPress={handlePressTriagemHome}>
                        <Image
                            source={require("@/../assets/Images/ArrowLeftBlue.png")}
                            style={styles.ArrowLeftBlue}
                        />
                    </TouchableOpacity>
                    <Image
                        source={require("@/../assets/Images/LogoInScreening.png")}
                        style={styles.logo}
                    />
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.olaTexto}>Triagem</Text>
                </View>
                <View>
                    <Text style={styles.infos}>Dados Pessoais</Text>

                    <View style={styles.caixaDados}>
                        <View style={styles.dadosContainer}>
                            <Text style={styles.dadosLabel}>
                                Nome: <Text style={styles.data}>{pacienteData?.nome}</Text>
                            </Text>
                        </View>

                        <View style={styles.dadosContainer}>
                            <Text style={styles.dadosLabel}>
                                CPF: <Text style={styles.data}>{pacienteData?.cpf}</Text>
                            </Text>
                        </View>

                        <View style={styles.dadosContainer}>
                            <Text style={styles.dadosLabel}>
                                Email: <Text style={styles.data}>{user?.email}</Text>
                            </Text>
                        </View>

                        <View style={styles.dadosContainer}>
                            <Text style={styles.dadosLabel}>
                                RG: <Text style={styles.data}>{pacienteData?.rg}</Text>
                            </Text>
                        </View>

                        <View style={styles.dadosContainer}>
                            <Text style={styles.dadosLabel}>
                                Filiação Paterna:{" "}
                                <Text style={styles.data}>{pacienteData?.filiacaoPaterna}</Text>
                            </Text>
                        </View>

                        <View style={styles.dadosContainer}>
                            <Text style={styles.dadosLabel}>
                                Filiação Materna:{" "}
                                <Text style={styles.data}>{pacienteData?.filiacaoMaterna}</Text>
                            </Text>
                        </View>

                        <View style={styles.dadosContainer}>
                            <Text style={styles.dadosLabel}>
                                Sexo: <Text style={styles.data}>{pacienteData?.sexo}</Text>
                            </Text>
                        </View>
                    </View>

                    <View style={styles.middleContainer}>
                        <View style={styles.hospitalView}>
                            <Picker
                                selectedValue={selectedHospital?.value}
                                onValueChange={handleHospitalChange}
                                style={[styles.inputs, { color: "#0891B2" }]}
                            >
                                <Picker.Item label="Selecione o Hospital" value="" />
                                {hospitais.map((hospital, index) => (
                                    <Picker.Item key={index} label={hospital.label} value={hospital.value} />
                                ))}
                            </Picker>
                        </View>

                        <View style={styles.borderMap}>

                            <MapView
                                style={{ height: 300, width: "100%" }}
                                region={{
                                    latitude: hospitalLocation ? hospitalLocation.latitude : -23.5505,
                                    longitude: hospitalLocation ? hospitalLocation.longitude : -46.6333,
                                    latitudeDelta: 0.0922,
                                    longitudeDelta: 0.0421,
                                }}
                            >
                                {/* Marcador do hospital selecionado */}
                                {hospitalLocation && (
                                    <Marker
                                        coordinate={hospitalLocation}
                                        title={selectedHospital?.label}
                                        description="Hospital Selecionado"
                                    />
                                )}
                            </MapView>
                        </View>

                        <Text style={styles.sintomasTexto}>Sintomas:</Text>

                        <View style={styles.sintomasContainer}>
                            {sintomas.map((sintoma, index) => (
                                <View key={index} style={[styles.sintomaContainer, { flex: 1 }]}>
                                    <CheckBox
                                        title={sintoma.label}
                                        checked={sintomasSelecionados[sintoma.value] || false} // Use || false para garantir que não seja undefined
                                        onPress={() => {
                                            setSintomasSelecionados((prevSintomas) => ({
                                                ...prevSintomas,
                                                [sintoma.value]: !prevSintomas[sintoma.value],
                                            }));
                                        }}
                                    />
                                </View>
                            ))}
                        </View>
                        <View style={styles.buttonWrapper}>
                            <TouchableOpacity
                                style={[styles.buttonContainer, styles.buttonContent]}
                                onPress={handleRealizarTriagem}
                            >
                                <Text style={styles.buttonText}>Realizar Triagem</Text>
                                <Image
                                    source={require("@/../assets/Images/ArrowRightWhite.png")}
                                    style={styles.setaDireita}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default NovaTriagem;
