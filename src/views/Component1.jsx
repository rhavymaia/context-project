import { Button } from 'react-bootstrap';
import Component2 from './Component2';
import { useUser } from './UserContext';
import api from '../api/ContextApi';

const Component1 = () => {
  let { show, setShow } = useUser();

  const handleClickShow = (e) => {
    setShow(!show);
  };

  const handleClickListarUsuarios = (e) => {
    // Get
    // fetch('http://localhost:3001/users')
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch(); // get

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
    // Post
    // let headers = {
    //   Accept: 'application/json',
    //   'Content-Type': 'application/json',
    // };
    // fetch('http://localhost:3001/users', {
    //   body: user,
    //   method: 'POST',
    //   headers,
    // }); // post
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
    <>
      <div>Teste</div>
      <Button variant="primary" onClick={handleClickShow}>
        Mudar Show
      </Button>

      <Button variant="success" onClick={handleClickListarUsuarios}>
        Listar Usuários
      </Button>

      <Button variant="warning" onClick={handleClickCadastrarUsuario}>
        Cadastrar Usuário
      </Button>
      <Component2></Component2>

      <form></form>

      <ul></ul>
    </>
  );
};

export default Component1;
