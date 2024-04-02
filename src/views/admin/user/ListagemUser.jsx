import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { useUser } from './UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

const ListagemUser = () => {
  let { users, listarUsers } = useUser();

  const columns = [
    {
      name: 'Nome',
      selector: (row) => row.nome,
    },
    {
      name: 'E-mail',
      selector: (row) => row.email,
    },
    {
      name: 'Opções',
      selector: (row) => {
        let { id } = row;
        return (
          <>
            <Button
              variant="danger"
              className="m-2"
              onClick={(e) => console.log(`Removendo o usuário: ${id}`)}
            >
              <FontAwesomeIcon className="px-2" icon={faTrash} />
              Remover
            </Button>
            <Button
              variant="light"
              className="m-2"
              onClick={(e) => console.log(`Editando o usuário: ${id}`)}
            >
              <FontAwesomeIcon className="px-2" icon={faPen} />
              Editar
            </Button>
          </>
        );
      },
    },
  ];

  useEffect(() => {
    listarUsers();
  }, []);

  return <DataTable columns={columns} data={users} />;
};

export default ListagemUser;
