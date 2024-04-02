import { createContext, useContext, useState } from 'react';
import * as Yup from 'yup';

import api from '../../../api/ContextApi';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  let [users, setUsers] = useState([]);

  let blancUser = { nome: '', email: '' };

  let [show, setShow] = useState(false);

  let handleShow = () => {
    setShow(!show);
  };

  const userValidationSchema = Yup.object().shape({
    nome: Yup.string().required().min(3).max(80),
    email: Yup.string().email().required(),
  });

  const cadastrarUser = async (user) => {
    return await api.post('users', user);
  };

  const listarUsers = async () => {
    try {
      // Requisição e resposta
      let response = await api.get('users');
      let data = response.data;
      // Dados
      setUsers([...data]);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <UserContext.Provider
      value={{
        users,
        setUsers,
        blancUser,
        show,
        setShow,
        handleShow,
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
