import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from './../services/api';
import Toast from '../components/snackBar/index';
import { Warnings } from '../types/index';
import { IUser } from '../types/index';

interface AuthContextData {
  loading: boolean;
  user: IUser | null;
  signed: boolean;
  signIn(email: string, password: string): Promise<void>;
  signUp(name: string, email: string, password: string, self: string | null, phone: string): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);

  const [toast, setToast] = useState({ visible: false, message: '', type: '' as Warnings });


  useEffect(() => {
    async function loadStorageData() {
      const storageUser = await AsyncStorage.getItem('@searchSports:user');
      const storageToken = await AsyncStorage.getItem('@searchSports:token');

      if (storageToken && storageUser) {
        api.defaults.headers['Authorization'] = `Bearer ${storageToken}`;
        setUser(JSON.parse(storageUser));
      }
      setTimeout(() => {
        setLoading(false);
      }, 3000)
    }
    loadStorageData();
  }, [])

  const closeToast = () => {
    setToast({ visible: false, message: ``, type: Warnings.ERROR });
  };

  const showToast = () => (
    <Toast message={toast.message} visible={toast.visible} type={toast.type} onClose={() => { closeToast() }} />
  );

  async function saveSession(data: any) {
    setUser(data.user);

    api.defaults.headers['Authorization'] = `Bearer ${data.token}`;

    await AsyncStorage.setItem('@searchSports:user', JSON.stringify(data.user));
    await AsyncStorage.setItem('@searchSports:token', JSON.stringify(data.token));
  }

  async function signIn(email: string, password: string) {
    try {

      if (!email || !password) {
        setToast({ visible: true, message: `Por favor preencha os campos`, type: Warnings.ATTENTION });
        return;
      }

      const response: any = await api.post('signIn', {
        email,
        password,
      });
      const { data } = response;

      await saveSession(data);

    } catch (e: any) {
      setToast({ visible: true, message: `${e!.response.data || 'Erro ao fazer login'}`, type: Warnings.ERROR });
    }
  }

  async function signOut() {
    await AsyncStorage.clear();
    setUser(null);
  }

  async function signUp(name: string, email: string, password: string, self: string | null, phone: string) {
    try {

      if (!email || !password || !name || !phone) {
        setToast({ visible: true, message: `Por favor preencha os campos`, type: Warnings.ATTENTION });
        return;
      }

      const response: any = await api.post('signUp', {
        name,
        email,
        password,
        self,
        phone,
      });
      const { data } = response;

      await saveSession(data);

      setToast({ visible: true, message: `Conta criada com sucesso!`, type: Warnings.SUCCESS });

    } catch (e: any) {
      setToast({ visible: true, message: `${e!.response.data || 'Erro ao fazer login'}`, type: Warnings.ERROR });
    }
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, loading, signIn, signOut, signUp }}>
      {showToast()}
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() { //Criação de hook
  const context = useContext(AuthContext);
  return context;
}