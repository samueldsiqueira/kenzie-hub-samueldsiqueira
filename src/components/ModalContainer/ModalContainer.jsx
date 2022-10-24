import { BtnComponent } from '../Button/style';
import Form from '../Form/Form';
import { ContainerModal } from './styled';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { TechContext } from '../../contexts/TechContext';

const techSchema = yup.object({
	status: yup.string().required('ta errado acerta essa porra'),
});

const ModalContainer = () => {
	const { modal, handleTechs, hideModal } = useContext(TechContext);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(techSchema) });

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
