import { Container } from 'react-bootstrap';
import { UserProvider } from '../../UserContext';
import FormModalUser from './FormModalUser';
import ListagemUser from './ListagemUser';
import OpcoesUser from './OpcoesUser';

const User = () => {
  return (
    <UserProvider>
      <Container>
        <OpcoesUser></OpcoesUser>
        <ListagemUser></ListagemUser>
        <FormModalUser></FormModalUser>
      </Container>
    </UserProvider>
  );
};

export default User;
