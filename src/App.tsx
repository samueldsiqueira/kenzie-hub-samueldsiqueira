import Routes from './routes';
import Global from './styles/global';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './contexts/AuthContext';
import TechProvider from './contexts/TechContext';

function App() {
	return (
		<>
			<Global />
			<ToastContainer />

			<AuthProvider>
				<TechProvider>
					<Routes />
				</TechProvider>
			</AuthProvider>
		</>
	);
}

export default App;
