import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BtnComponent } from '../../components/Button/style';
import apiGateway from '../../services/apiGateway';
import { DashboardContainer } from './style';

const Dashboard = () => {
  const [user, setUser] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    apiGateway.get("/profile", {
      headers: {
        Authorization: `
        Bearer ${localStorage.getItem("@TOKEN")} 
      `
      },
    }).then((response) => {
      setUser({
        name: response.data.name,
        course_module: response.data.course_module,
      });
    });
  }, []);

  const logout = (e) => {
    e.preventDefault()
    localStorage.clear();
    navigate('/');
  };
  return (
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
  )

};

export default Dashboard;
