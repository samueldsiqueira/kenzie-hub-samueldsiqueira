import { createContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import apiGateway from '../services/apiGateway';
import { toast } from 'react-toastify';

export const TechContext = createContext({});

const TechProvider = ({ children }) => {
	const [modalAdd, setModalAdd] = useState(false);
	const [refreshList, setRefreshList] = useState(false);
	const { techs, setTechs } = useContext(AuthContext);
	const [techSelected, setTechSelected] = useState({});

	const showModal = (tech) => {
		setRefreshList(true);
		setTechSelected(tech);
	};

	useEffect(() => {
		const loadTechs = async () => {
			const token = localStorage.getItem('@hubi:token');

			if (token) {
				try {
					apiGateway.defaults.headers.authorization = `Bearer ${token}`;
					const { data } = await apiGateway.get('users/techs');

					setTechs(...techs, resp.data);
				} catch (error) {
					console.error(error);
				}
			}
		};

		loadTechs();
	}, []);

	const createTech = async (tech) => {
		try {
			const { data } = await apiGateway.post('users/techs', tech);
			setTechs([...techs, data]);
		} catch (error) {
			console.error(error);
		}

		setModalAdd(false);
	};

	const updateTech = async (tech) => {
		try {
			const { data } = await apiGateway.put(`users/techs/${tech.id}`, tech);
			const newTechs = techs.map((t) => (t.id === data.id ? data : t));
			setTechs(newTechs);
		} catch (error) {
			console.error(error);
		}

		setRefreshList(false);
	};

	const deleteTech = async (tech) => {
		try {
			await apiGateway.delete(`users/techs/${tech.id}`);
			const newTechs = techs.filter((t) => t.id !== tech.id);
			setTechs(newTechs);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<TechContext.Provider
			value={{
				techs,
				createTech,
				updateTech,
				deleteTech,
				showModal,
			}}
		>
			{children}
		</TechContext.Provider>
	);
};
