import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { BtnComponent } from '../../components/Button/style';
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
            <h2>Que pena! Estamos em desenvolvimento :(</h2>
            <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
          </section>

        </DashboardContainer>

      ) :
        <Navigate to={'/'} replace />

      }
    </>
  )

};

export default Dashboard;
