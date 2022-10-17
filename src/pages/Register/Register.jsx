import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { registerSchema } from '../../validators/schemas';

import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthContext';

import Form from '../../components/Form/Form.js';
import { BtnComponent } from '../../components/Button/style';


const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(registerSchema) });

  const { registerUser } = useContext(AuthContext);

  const onSubmitFunction = (data) => {
    registerUser(data);
  };



  return (

    <>
      <div>
        <h1>Kenzie Hub</h1>
        <Link to='/'>Voltar</Link>
      </div>
      <Form onSubmit={handleSubmit(onSubmitFunction)}>
        <h2>Crie sua conta</h2>
        <span>Rapido e grátis, vamos nessa</span>
        <label htmlFor="name">Nome</label>
        <input id="name" name="name" type="text" placeholder="Nome" {...register("name")} />
        <p>{errors.name?.message}</p>

        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="E-mail" {...register("email")} />
        <p>{errors.email?.message}</p>

        <label htmlFor="password">Senha</label>
        <input id="password" name="password" type="password" placeholder="Senha" {...register("password")} />
        <p>{errors.password?.message}</p>

        <label htmlFor="password_confirmation">Confirmação de senha</label>
        <input id="password_confirmation" name="password_confirmation" type="password" placeholder="Confirmação de senha" {...register("password_confirmation")} />
        <p>{errors.password_confirmation?.message}</p>

        <label htmlFor="bio">Bio</label>
        <input id="bio" name="bio" type="text" placeholder="Bio" {...register("bio")} />
        <p>{errors.bio?.message}</p>

        <label htmlFor="contact">Contato</label>
        <input id="contact" name="contact" type="text" placeholder="Contato" {...register("contact")} />
        <p>{errors.contact?.message}</p>

        <select name="modules" id="modules">
          <option value="1">Primeiro Módulo</option>
          <option value="2">Segundo Módulo</option>
          <option value="3">Terceiro Módulo</option>
          <option value="4">Quarto Módulo</option>
          <option value="5">Quinto Módulo</option>
          <option value="6">Sexto Módulo</option>
        </select>

        <BtnComponent className='btn-large' type="submit">Registrar</BtnComponent>

      </Form>
    </>
  )

};

export default Register;
