import { Button } from 'react-bootstrap';
import Component2 from './Component2';
import { useUser } from './UserContext';
import api from '../api/ContextApi';

const Component1 = () => {
  let { show, setShow } = useUser();

  const handleClick = () => {
    setShow(!show);

    let user = { id: '1', nome: 'José', email: 'jose@mail.com' };
    fetch('http://localhost:3001/users'); // get
    let headers = {};
    fetch('http://localhost:3001/users', {
      body: user,
      method: 'POST',
      headers,
    }); // post

    api.get('users');
    api.post('users', user);
  };

  return (
    <>
      <div>Teste</div>
      <Button variant="primary" onClick={handleClick}>
        Primary
      </Button>
      <Component2></Component2>
    </>
  );
};

export default Component1;
