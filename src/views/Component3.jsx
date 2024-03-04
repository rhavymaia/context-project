import { useUser } from './UserContext';

const Component3 = () => {
  let { show } = useUser();
  console.log(show);
  return <div>O valor da variável show é {`${show}`}</div>;
};

export default Component3;
