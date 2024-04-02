import { Button } from 'react-bootstrap';
import { useUser } from './UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faList, faPlus } from '@fortawesome/free-solid-svg-icons';

const OpcoesUser = () => {
  let { handleShow, listarUsers } = useUser();

  const handleClickListarUsuarios = (e) => {
    listarUsers();
  };

  return (
    <div>
      <Button
        variant="light"
        className="m-2"
        onClick={handleClickListarUsuarios}
      >
        <FontAwesomeIcon icon={faList} />
      </Button>

      <Button variant="light" className="m-2" onClick={handleShow}>
        <FontAwesomeIcon icon={faPlus} />
      </Button>
    </div>
  );
};

export default OpcoesUser;
