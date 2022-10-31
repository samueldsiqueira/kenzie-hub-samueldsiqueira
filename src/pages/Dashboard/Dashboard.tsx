import { Key, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

import { BtnComponent } from '../../components/Button/style';
import TechList from '../../components/TechList/TechList';
import { DashboardContainer } from './style';
import ModalContainer from '../../components/ModalContainer/ModalContainer';
import { TechContext } from '../../contexts/TechContext';
import { Navigate } from 'react-router-dom';
import { ITechsUser } from '../../interfaces/IThechs';

const Dashboard = () => {
	const { logout, user, loading } = useContext(AuthContext);
	const { modal, showModal, techs, deleteTech, refreshList } = useContext(TechContext);

	if (loading || refreshList) {
		return <p>Carregand...</p>;
	}

	return (
		<>
			{user ? (
				<DashboardContainer>
					<header>
						<h1 className='brand'>Kenzie Hub</h1>
						<BtnComponent backgroundColor='--color-gray-3' onClick={logout} type='submit'>
							Sair
						</BtnComponent>
					</header>

					<div className='horizontal-line'></div>

					<section className='user-profile'>
						<h2>Olá, {user.name}</h2>
						<span>{user.course_module}</span>
					</section>

					<div className='horizontal-line'></div>

					<section className='user-tech'>
						<div className='user-profile'>
							<h2>Tecnologias</h2>
							<BtnComponent onClick={showModal} className='btn-add' backgroundColor='--color-gray-3' type='submit'>
								+
							</BtnComponent>
						</div>
						<ul>
							{techs
								? techs.map((item: ITechsUser) => (
										<TechList key={item.title} title={item.title} id={item.id} status={item.status} />
								  ))
								: null}
						</ul>
					</section>

					{modal ? <ModalContainer /> : null}
				</DashboardContainer>
			) : (
				<Navigate to={'/'} replace />
			)}
		</>
	);
};

export default Dashboard;
