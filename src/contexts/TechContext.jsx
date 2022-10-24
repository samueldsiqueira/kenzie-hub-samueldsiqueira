import apiGateway from '../services/apiGateway';

import { createContext, useEffect, useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export const TechContext = createContext({});

const TechProvider = ({ children }) => {
	const { user, loading, setLoading } = useContext(AuthContext);
	const [modal, setModal] = useState(false);
	const [techs, setTechs] = useState([]);
	const [refreshList, setRefreshList] = useState(false);
	const [techSelected, setTechSelected] = useState({});

	useEffect(() => {
		const loadTechs = async () => {
			const token = localStorage.getItem('@hubi:token');

			if (token) {
				try {
					apiGateway.defaults.headers.authorization = `Bearer ${token}`;

					const { data } = await apiGateway.get('/profile');

					setTechs(data.techs);
				} catch (error) {
					console.error(error);
				}
			}
			setLoading(false);
		};
		loadTechs();
	}, [loading]);

	const handleTechs = async (data) => {
		const token = localStorage.getItem('@hubi:token');
		try {
			apiGateway.defaults.headers.authorization = `Bearer ${token}`;
			const response = await apiGateway.post('/users/techs', data);

			setTechs([...techs, data]);
			setModal(false);
		} catch (error) {
			console.error(error);
		}
	};

	const deleteTech = async (id) => {
		try {
			await apiGateway.delete(`users/techs/${id}`);
			const newTechs = techs.filter((t) => t.id !== id);
			setTechs(newTechs);
		} catch (error) {
			console.error(error);
		}
	};

	const showModal = () => {
		setModal(true);
	};

	const hideModal = () => {
		setModal(false);
	};

	return (
		<TechContext.Provider value={{ handleTechs, hideModal, deleteTech, showModal, techs, modal }}>
			{children}
		</TechContext.Provider>
	);
};

export default TechProvider;
