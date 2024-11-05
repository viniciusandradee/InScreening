import { User } from "firebase/auth";
import { PacienteData } from "./navigation";

type AuthContextProps = {
  user?: User | null;
  authentication: (email: string, password: string) => void;
  createUser: (email: string, password: string, pacienteData: any) => void;
  createTriagem: (triagemData: any) => void;
  signOut: () => void;
  
};

export { AuthContextProps };