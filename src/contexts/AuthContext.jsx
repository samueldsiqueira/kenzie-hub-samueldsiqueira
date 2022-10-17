// import { createContext, useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import apiGateway from '../services/apiGateway';

// export const AuthContext = createContext({});

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     const loadUser = async () => {
//       const token = localStorage.getItem('@hub-token:token');

//       if (token) {
//         try {
//           apiGateway.defaults.headers.Authorization = `Bearer ${token}`;

//           const { data } = await apiGateway.get('/profile');

//           setUser(data);
//         } catch (error) {
//           console.error(error);
//         }
//       }

//       setLoading(false);
//     };
//     loadUser();
//   }, []);



//   const loginUser = async (data) => {
//     try {
//       const response = await apiGateway.post('/sessions', data);

//       const { user: userResponse, token } = response.data;

//       apiGateway.defaults.headers.authorization = `Bearer ${token}`;

//       setUser(userResponse);
//       localStorage.setItem('@hub-token:token', token);

//       const toNavigate = location.state?.from.pathname || '/dashboard';

//       navigate(toNavigate, { replace: true });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem('token');
//     navigate('/login');
//   };

//   return <AuthContext.Provider value={{ user, loading, registerUser, logout }}>{children}</AuthContext.Provider>;
// };

// export default AuthProvider;
