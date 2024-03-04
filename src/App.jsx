import 'bootstrap/dist/css/bootstrap.min.css';
import Component1 from './views/Component1';
import { UserProvider } from './views/UserContext';

function App() {
  return (
    <UserProvider>
      <Component1></Component1>
    </UserProvider>
  );
}

export default App;
