import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";

import * as firebaseAuth from "firebase/auth";

import { auth, database } from "@/firebaseConfig";
import { AuthContextProps } from "@/Types/context";
import { collection, addDoc } from "firebase/firestore";
import { TriagemData } from "@/Types/navigation";

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<firebaseAuth.User | null>();

  const authentication = async (email: string, password: string) => {
    firebaseAuth.signInWithEmailAndPassword(auth, email, password);
  };

  const createUser = async (email: string, password: string, pacienteData: any) => {
    const userCredential = await firebaseAuth.createUserWithEmailAndPassword(auth, email, password);
    const userId = userCredential.user.uid;



    const pacienteRef = collection(database, "pacientes");
    await addDoc(pacienteRef, {
      ...pacienteData,
      userId,

    });
  };

  const createTriagem = async (triagemData: TriagemData) => {
    const userId = auth.currentUser?.uid;
  
    if (!userId) {
      throw new Error("Usuário não autenticado");
    }

    if (!triagemData.hospital) {
      throw new Error("Um hospital deve ser selecionado");
    }

    if (!triagemData.sintomas) {
      throw new Error("Pelo menos um sintoma deve ser selecionado");
    }
  
    const triagemRef = collection(database, "triagens");
    try {
      await addDoc(triagemRef, {
        ...triagemData,
        userId,
      });
    } catch (error) {
      console.error("Erro ao criar triagem:", error);
      throw new Error("Erro ao registrar triagem");
    }
  };


  const signOut = async () => {
    await firebaseAuth.signOut(auth);
  };

  useEffect(() => {
    const subscriber = firebaseAuth.onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return subscriber;
  }, []);

  return (
    <AuthContext.Provider value={{ user, authentication, createUser, signOut, createTriagem }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };