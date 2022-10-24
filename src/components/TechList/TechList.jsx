import { createContext, useContext } from 'react';
import { TechContext } from '../../contexts/TechContext';

import { ThechListContainer } from './style';

const TechList = ({ title, status, id }) => {
	const { deleteTech } = useContext(TechContext);

	return (
		<ThechListContainer>
			<h2>{title}</h2>
			<div>
				<span>{status}</span>
				<button id={id} onClick={() => deleteTech(id)} type='submit'>
					X
				</button>
			</div>
		</ThechListContainer>
	);
};

export default TechList;
