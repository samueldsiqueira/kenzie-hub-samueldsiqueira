import apiGateway from '../services/apiGateway';
import { createContext, useEffect, useState, useContext, ReactNode } from 'react';
import { AuthContext } from './AuthContext';
import { ITech } from '../interfaces/IThechs';

interface TechProviderProps {
	children: ReactNode;
}

export interface ITechContext {
	handleTechs: (data: IHandleTechs) => Promise<void>;
	hideModal(): void;
	deleteTech: (id: string) => Promise<void>;
	showModal(): void;
	techs: any;
	modal: boolean;
	refreshList: boolean;
}

interface IHandleTechs {
	title: string;
	status: string;
	id: string;
}

export const TechContext = createContext({} as ITechContext);

const TechProvider = ({ children }: TechProviderProps) => {
	const { user, loading } = useContext(AuthContext);

	const [modal, setModal] = useState(false);
	const [techs, setTechs] = useState<ITech[]>([]);
	const [refreshList, setRefreshList] = useState<boolean>(false);
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
			setRefreshList(true);
		};
		loadTechs();
	}, [refreshList]);

	const handleTechs = async (data: IHandleTechs) => {
		const token = localStorage.getItem('@hubi:token');
		try {
			apiGateway.defaults.headers.authorization = `Bearer ${token}`;
			const response = await apiGateway.post<ITech>('/users/techs', data);

			setTechs([...techs, data]);
			setModal(false);
		} catch (error) {
			console.error(error);
		}
	};

	const deleteTech = async (id: string) => {
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
		<TechContext.Provider value={{ handleTechs, hideModal, deleteTech, showModal, techs, modal, refreshList }}>
			{children}
		</TechContext.Provider>
	);
};

export default TechProvider;
