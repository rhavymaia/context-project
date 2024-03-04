import { useUser } from './UserContext';

const Component3 = () => {
  let { show } = useUser();
  return <div>O valor da variável show é {`${show}`}</div>;
};

export default Component3;
