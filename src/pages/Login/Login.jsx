import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// import { useContext } from 'react';
import { loginSchema } from '../../validators/schemas';
import apiGateway from '../../services/apiGateway';

import { Link, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../contexts/AuthContext';

import Form from '../../components/Form/Form.js';
import { BtnComponent } from '../../components/Button/style';
import './style.js';

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { LoginContainer } from './style.js';



const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const navigate = useNavigate();

  const toastSuccess = () => {
    toast.success('Login efetuado com sucesso!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  }

  const toastError = () => {
    toast.error('🦄 Email ou senha incorretos!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }


  const onSubmitFunction = (data) => {
    apiGateway.post('/sessions', data)
      .then((response) => {
        localStorage.setItem('@TOKEN', response.data.token);
        toastSuccess()
      },
        setTimeout(() => {
          navigate('/dashboard', { replace: true })

        }, 3000)
      )
      .catch((error) => {
        toastError()
      })

  }





  return (
    <>
      <LoginContainer>
        <h1 className='brand'> Kenzie Hub</h1>

        <Form onSubmit={handleSubmit(onSubmitFunction)}>
          <h2>Login</h2>
          <label htmlFor='email'>Email</label>
          <input id='email' name='email' type='email' placeholder='E-mails' {...register('email')} />
          <p>{errors.email?.message}</p>

          <label htmlFor='password'>Senha</label>
          <input id='password' name='password' type='password' placeholder='Senha' {...register('password')} />
          <p>{errors.password?.password}</p>

          <BtnComponent className='btn-large' type='submit'>
            Entrar
          </BtnComponent>
          <div className='register-description'>
            <p>Ainda não possui uma conta?</p>
            <Link className='btn-large signin-button ' to='/register'>
              Cadastre-se
            </Link>
          </div>
        </Form>
      </LoginContainer>

    </>
  );
};

export default Login;
