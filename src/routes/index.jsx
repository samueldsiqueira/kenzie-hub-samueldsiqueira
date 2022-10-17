import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound/NotFound';

const RoutesMain = () => (
  <Routes>
    <Route path='/dashboard' element={<Dashboard />}></Route>
    <Route path='/' element={<Login />}></Route>
    <Route path='/register' element={<Register />}></Route>
    <Route path='/*' element={<NotFound />}></Route>
  </Routes>
);

export default RoutesMain;
