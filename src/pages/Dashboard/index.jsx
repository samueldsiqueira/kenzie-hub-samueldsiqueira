import { useContext } from 'react';
import { BtnComponent } from '../../components/Button/style';
import { AuthContext } from '../../contexts/AuthContext';

const Dashboard = () => {
	const { abacaxi } = useContext(AuthContext);

	console.log(abacaxi);

	return <h1>Você está logado</h1>;
};

export default Dashboard;
