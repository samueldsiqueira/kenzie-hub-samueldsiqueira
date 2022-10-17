import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BtnComponent } from '../../components/Button/style';
import { DashboardContainer } from './style';


const Dashboard = () => {
  const navigate = useNavigate()

  const logout = (e) => {
    e.preventDefault()
    localStorage.clear();
    navigate('/');
  };
  return (
    <DashboardContainer>
      <header>
        <h1>Kenzie Hub</h1>
        <BtnComponent onClick={logout} type='submit'>Sair</BtnComponent>
      </header>

      <div className='horizontal-line'>

      </div>


      <section className='user-profile'>
        <h2>
          Olá, capeta
        </h2>
        <span>Primeiro módulo  (Introdução ao Frontend)</span>
      </section>

      <div className='horizontal-line'>

      </div>

      <section className='user-tech'>
        <h2>Que pena! Estamos em desenvolvimento :(</h2>
        <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
      </section>

    </DashboardContainer>
  )

};

export default Dashboard;
