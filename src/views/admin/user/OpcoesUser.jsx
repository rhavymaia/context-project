import { Button } from 'react-bootstrap';
import api from '../../../api/ContextApi';

const OpcoesUser = () => {
  const handleClickListarUsuarios = (e) => {
    api
      .get('users/')
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClickCadastrarUsuario = (e) => {
    let user = { nome: 'José Antônio Oliveira', email: 'jao@mail.com' };
    api
      .post('users/', user)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Button variant="success" onClick={handleClickListarUsuarios}>
        Listar Usuários
      </Button>

      <Button variant="warning" onClick={handleClickCadastrarUsuario}>
        Cadastrar Usuário
      </Button>
    </div>
  );
};

export default OpcoesUser;
