import { BtnComponent } from '../Button/style';
import Form from '../Form/Form';
import { ContainerModal } from './styled';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import apiGateway from '../../services/apiGateway';
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const techSchema = yup.object({
	status: yup.string().required('ta errado acerta essa porra'),
});

const ModalContainer = ({ hideModal }) => {
	const { user } = useContext(AuthContext);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(techSchema) });

	const handleTechs = async (data) => {
		console.log(user);
		console.log(data);
		const token = localStorage.getItem('@hubi:token');
		try {
			apiGateway.defaults.headers.authorization = `Bearer ${token}`;
			const response = await apiGateway.post('/users/techs', data);
			toastSuccess(), console.log(response);
		} catch (error) {
			console.log(error);
			console.error(error);
		}

		apiGateway.post('/users/techs');
	};

	return (
		<ContainerModal>
			<div className='bg-modal'>
				<div>
					<div className='close-modal'>
						<h1>Cadastrar Tecnologia</h1>

						<button type='submit' onClick={hideModal}>
							X
						</button>
					</div>
				</div>
				<Form onSubmit={handleSubmit(handleTechs)}>
					<label htmlFor='title'>Título</label>
					<input id='title' name='title' type='text' placeholder='Título' {...register('title')} />
					<p>{errors.title?.title}</p>
					<label htmlFor='status'>Selecionar Status</label>
					<select name='status' {...register('status')}>
						<option value='iniciante'>Iniciante</option>
						<option value='intermediário'>Intermediário</option>
						<option value='avançado'>Avançado</option>
					</select>
					<BtnComponent type='submit'>Enviar</BtnComponent>
				</Form>
			</div>
		</ContainerModal>
	);
};

export default ModalContainer;
