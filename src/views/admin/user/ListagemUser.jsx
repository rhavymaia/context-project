import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { useUser } from '../../UserContext';

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
          <Button
            variant="danger"
            onClick={(e) => console.log(`Removendo o usuário: ${id}`)}
          >
            Remover
          </Button>
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
