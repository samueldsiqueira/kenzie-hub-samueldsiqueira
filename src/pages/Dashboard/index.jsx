import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { BtnComponent } from '../../components/Button/style';
import TechList from '../../components/TechList/TechList';
import { AuthContext } from '../../contexts/AuthContext';
import { DashboardContainer } from './style';

const Dashboard = () => {

  const { logout, user, loading } = useContext(AuthContext)
  console.log(user)

  if (loading) {
    return <p>Carregando...</p>
  }

  return (
    <>
      {user ? (
        <DashboardContainer>
          <header>
            <h1 className='brand'>Kenzie Hub</h1>
            <BtnComponent bgColor='grayDark' onClick={logout} type='submit'>Sair</BtnComponent>
          </header>

          <div className='horizontal-line'>

          </div>


          <section className='user-profile'>
            <h2>
              Olá, {user.name}
            </h2>
            <span>{user.course_module}</span>
          </section>

          <div className='horizontal-line'>

          </div>

          <section className='user-tech'>

            <div className='user-profile'>
              <h2>Tecnologias</h2>
              <button>+</button>
            </div>

            <TechList />



          </section>

        </DashboardContainer>

      ) :
        <Navigate to={'/'} replace />

      }
    </>
  )

};

export default Dashboard;
