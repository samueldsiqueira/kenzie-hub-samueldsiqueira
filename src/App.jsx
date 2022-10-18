import Routes from './routes';
import Global from './styles/global';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './contexts/AuthContext';


function App() {
  return (
    <>
      <Global />
      <ToastContainer />

      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  );
}

export default App;
