import { NavigationProp } from "@react-navigation/native";
import { User } from "firebase/auth";

type AuthStack = {
  Login: undefined;
  Register: undefined;
};

type AuthNavigation = NavigationProp<AuthStack>;

type PacienteData = {
  nome: string;
  cpf: string;
  email: string;
  rg: string;
  sexo: string;
  endereco: {
      estado: string;
      municipio: string;
      logradouro: string;
      numero: string;
      complemento: string;
      cep: string;
  };
  filiacaoPaterna: string;
  filiacaoMaterna: string;
  
};

type TriagemData = {
  id: string;
  dataInicio: string;
  sintomas: string;
  situacao: string;
  prioridade: string;
  hospital: string;
  paciente: {
    nome: string;
  }
}

export { AuthStack, AuthNavigation, PacienteData, TriagemData };