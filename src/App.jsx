import { ToastContainer } from 'react-toastify';
import AuthProvider from './contexts/AuthContext';
import Routes from './routes';
import Global from './styles/global';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Global />
      <ToastContainer position='top-right' autoClose={3000} />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  );
}

export default App;
