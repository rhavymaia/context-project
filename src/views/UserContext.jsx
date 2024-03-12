import { createContext, useContext, useState } from 'react';
import * as Yup from 'yup';

import api from '../api/ContextApi';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  let [users, setUsers] = useState([]);

  let blancUser = { nome: '', email: '' };

  let [show, setShow] = useState(true);

  const userValidationSchema = Yup.object().shape({
    nome: Yup.string().required().min(3).max(80),
    email: Yup.string().email().required(),
  });

  const cadastrarUser = async (user) => {
    return await api.post('users', user);
  };

  const listarUsers = async () => {
    return await api.get('users');
  };

  return (
    <UserContext.Provider
      value={{
        users,
        setUsers,
        blancUser,
        show,
        setShow,
        cadastrarUser,
        listarUsers,
        userValidationSchema,
      }}
    >
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
