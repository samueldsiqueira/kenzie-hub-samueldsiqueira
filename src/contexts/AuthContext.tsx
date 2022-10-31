import { createContext, ReactNode, useEffect, useState } from 'react';
import { RootObject } from '../interfaces';
import { useNavigate } from 'react-router-dom';
import apiGateway from '../services/apiGateway';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';

import { string } from 'yup';

export interface AuthProviderProps {
	children: ReactNode;
}

export interface IAuthContext {
	onSubmitFunction: (data: ILogin) => Promise<void>;
	toastError(): void;
	toastSuccess(): void;
	logout: (e: React.SyntheticEvent) => void;
	user: RootObject | undefined;
	loading: boolean;
}
interface ILogin {
	email: string;
	password: string;
}
export const AuthContext = createContext({} as IAuthContext);

const AuthProvider = ({ children }: AuthProviderProps) => {
	const [user, setUser] = useState<RootObject>();
	const [loading, setLoading] = useState<boolean>(true);

	const navigate = useNavigate();

	useEffect(() => {
		const loadUser = async () => {
			const token = localStorage.getItem('@hubi:token');

			if (token) {
				try {
					apiGateway.defaults.headers.authorization = `Bearer ${token}`;

					const { data } = await apiGateway.get('/profile');
					setUser(data);
					navigate('/dashboard');
				} catch (error) {
					console.error(error);
				}
			}
		};
		loadUser();
	}, [loading]);

	const logout = (e: React.SyntheticEvent) => {
		e.preventDefault();
		localStorage.clear();
		setLoading(false);
		navigate('/');
	};

	const onSubmitFunction = async (data: ILogin) => {
		try {
			const response = await apiGateway.post('/sessions', data);

			const { token, user } = response.data;

			localStorage.setItem('@hubi:token', token);

			setUser(user);
			toastSuccess();

			navigate('/dashboard');
		} catch (error) {
			toastError();
		}
	};
	const toastSuccess = () => {
		toast.success('Login efetuado com sucesso!', {
			position: 'top-center',
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
		});
	};

	const toastError = () => {
		toast.error('Email ou senha incorretos!', {
			position: 'top-right',
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'dark',
		});
	};

	return (
		<AuthContext.Provider value={{ onSubmitFunction, toastError, toastSuccess, logout, user, loading }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
