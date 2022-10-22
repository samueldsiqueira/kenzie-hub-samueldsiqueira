import { BtnComponent } from '../Button/style';
import Form from '../Form/Form';
import { ContainerModal } from './styled';

const ModalContainer = () => (
	<ContainerModal>
		<div className='bg-modal'>
			<div>
				<div className='close-modal'>
					<h1>Cadastrar Tecnologia</h1>

					<button type='submit'>X</button>
				</div>
			</div>
			<Form >
				<label htmlFor='title'>Título</label>
				<input id='title' name='title' type='text' placeholder='Título' />
				<label>Selecionar Status</label>
				<select>
					<option value='iniciante'>Iniciante</option>
					<option value='intermediário'>Intermediário</option>
					<option value='avançado'>Avançado</option>
				</select>
				<BtnComponent type='submit'>Enviar</BtnComponent>
			</Form>
		</div>
	</ContainerModal>
);

export default ModalContainer;
