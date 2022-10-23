import { useContext, useState } from 'react';

import { BtnComponent } from '../../components/Button/style';
import Form from '../../components/Form/Form';
import TechList from '../../components/TechList/TechList';
import { AuthContext } from '../../contexts/AuthContext';
import { DashboardContainer } from './style';
import Modal from 'react-modal';
import ModalContainer from '../../components/ModalContainer/ModalContainer';

const Dashboard = () => {
  const [modal, setModal] = useState(false)
  const { logout, user, loading } = useContext(AuthContext);
  
  const showModal = () => {
    console.log('abriu modal')
    setModal(true)
  }

  const hideModal = () => {
    console.log('fechou modal')

    setModal(false)
  }


	if (loading) {
		return <p>Carregando...</p>;
	}

	return (
		<>
			{user ? (
				<DashboardContainer>
					<header>
						<h1 className='brand'>Kenzie Hub</h1>
						<BtnComponent bgColor='grayDark' onClick={logout} type='submit'>
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
							<BtnComponent onClick={showModal} className='btn-add' bgColor='grayDark' type='submit'>
								+
							</BtnComponent>
						</div>
						<TechList />
          </section>
          {modal ?
            <ModalContainer hideModal={hideModal} /> :
            <></>
          }
				</DashboardContainer>
			) : (
        <Navigate to={'/'} replace />
        )}
		</>
	);
};

export default Dashboard;
