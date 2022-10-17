import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';


import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css";


import apiGateway from '../../services/apiGateway';
import Form from '../../components/Form/Form.js';
import { BtnComponent } from '../../components/Button/style';
import { RegisterContainer } from './styled';


const schema = yup.object({
  email: yup
    .string()
    .email("Deve ser um e-mail válido")
    .required("Campo obrigatório"),
  password: yup
    .string()
    .min(6, "A senha deve conter no minimo 6 caracteres")
    // .matches(
    //   /^(?=.[A-Za-z])(?=.[0-9])(?=.*[!@#$%^&*])/,
    //   "A senha deve conter caracteres especiais e numeros."
    // )
    .required("Campo obrigatório"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "A senha deve ser igual"),
  name: yup.string().required("Campo obrigatório"),
  bio: yup.string().required("Campo obrigatório."),
  contact: yup.string().required("Campo obrigatorio"),
  course_module: yup.string().required("Campo obritório"),
});

const Register = () => {

  const navigate = useNavigate()

  const toastSuccess = () => {
    toast.success('Cadastro realizado com sucesso!', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data) => {
    console.log(data)
    console.log(errors)
    apiGateway.post("/users", data)
      .then(
        (response) => console.log(response.data),
        toastSuccess(),
        setTimeout(() => {
          navigate("/");
        }, 2000)
      )
      .catch((err) => console.log(err));
  }

  return (

    <>
      <RegisterContainer>

        <div>
          <h1>Kenzie Hub</h1>
          <Link className='btn-back' to='/'>Voltar</Link>
        </div>
        <Form onSubmit={handleSubmit(onSubmitFunction)}>
          <h2>Crie sua conta</h2>
          <span>Rapido e grátis, vamos nessa</span>
          <label htmlFor="name">Nome</label>
          <input name="name" type="text" placeholder="Nome" {...register("name")} />
          <p>{errors.name?.message}</p>

          <label htmlFor="email">Email</label>
          <input name="email" type="email" placeholder="E-mail" {...register("email")} />
          <p>{errors.email?.message}</p>

          <label htmlFor="password">Senha</label>
          <input name="password" type="password" placeholder="Senha" {...register("password")} />
          <p>{errors.password?.message}</p>

          <label htmlFor="confirmPassword">Confirmação de senha        </label>
          <input name="confirmPassword" type="password" placeholder="Confirmação de senha" {...register("confirmPassword")} />
          <p>{errors.confirmPassword?.message}</p>

          <label htmlFor="bio">Bio</label>
          <input name="bio" type="text" placeholder="Bio" {...register("bio")} />
          <p>{errors.bio?.message}</p>

          <label htmlFor="contact">Contato</label>
          <input name="contact" type="text" placeholder="Contato" {...register("contact")} />
          <p>{errors.contact?.message}</p>

          <select name="" {...register("course_module")} id="">
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro módulo (Introdução ao Frontend)
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
              Segundo módulo (Frontend Avançado)
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro módulo (Introdução ao Backend)
            </option>
            <option value="Quarto módulo (Backend Avançado)">
              Quarto módulo (Backend Avançado)
            </option>
          </select>
          <p> {errors.course_module?.message} </p>

          <BtnComponent className='btn-large' type='submit'>
            Enviar
          </BtnComponent>
        </Form>
      </RegisterContainer>
    </>
  )

};

export default Register;
