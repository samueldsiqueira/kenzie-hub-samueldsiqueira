import { useContext } from 'react';
import { TechContext } from '../../contexts/TechContext';
import { ThechListContainer } from './style';

const TechList = () => {
	const { techs } = useContext(TechContext);
	return (
		<ThechListContainer>
			<li>
				<h2>list</h2>
				<span>conhecimento</span>
				<button>X</button>
			</li>
		</ThechListContainer>
	);
};

export default TechList;
