import { createContext, useContext, useState } from 'react';
import api from '../api/ContextApi';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  let [show, setShow] = useState(true);

  const cadastrarUser = async (user) => {
    console.log('Cadastro de User.');
    await api.post('users', user);
  };

  return (
    <UserContext.Provider value={{ show, setShow, cadastrarUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const ctx = useContext(UserContext);
  if (!ctx) {
    throw new Error('Não foi possível inicializar o contexto do usuário');
  }
  return ctx;
};
