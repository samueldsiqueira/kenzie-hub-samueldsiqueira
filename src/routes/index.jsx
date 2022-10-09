import { Route, Routes } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { Dashboard } from '../pages/Dashboard'
import { notFound } from '../pages/404'

const RoutesMain = () => (
  <Routes>
    <Route path='/' element={<Login />} />

  </Routes>
);

export default RoutesMain;