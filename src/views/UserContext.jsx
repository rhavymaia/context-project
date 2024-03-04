import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  let [show, setShow] = useState(true);

  const cadastrarUser = () => {
    console.log('Cadastro de User.');
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
