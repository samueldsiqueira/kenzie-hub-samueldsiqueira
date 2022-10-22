import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiGateway from '../services/apiGateway';
import { toast } from 'react-toastify';


import 'react-toastify/dist/ReactToastify.min.css';

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem('@hubi:token');

      if (token) {
        try {
          apiGateway.defaults.headers.authorization = `Bearer ${token}`;

          const { data } = await apiGateway.get('/profile');


          setUser(data);
          console.log(user)

        } catch (error) {
          console.error(error);
        }
      }
      setLoading(false);
    };
    loadUser();
  }, [loading]);

  const toastSuccess = () => {
    toast.success('Login efetuado com sucesso!', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  const toastError = () => {
    toast.error('Email ou senha incorretos!', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  };

  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    setLoading(false);
    navigate('/');
  }

  const onSubmitFunction = (data) => {
    try {
      apiGateway.post('/sessions', data).then((response) => {
        const { token, user } = response.data;
        localStorage.setItem('@hubi:token', token);
        setUser(user);
        toastSuccess();
        navigate('/dashboard');
      });
    }
    catch (error) {
      toastError();
    }

    // apiGateway
    //   .post('/sessions', data)
    //   .then((response) => {
    //     localStorage.setItem('@hubi:token', response.data.token);
    //     setUser(response.data);
    //     toastSuccess();
    //   }, navigate('/dashboard', { replace: true }))
    //   .catch((error) => {
    //     toastError();
    //   });
  };

  return (
    <AuthContext.Provider value={{ onSubmitFunction, toastError, toastSuccess, logout, user, loading }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
