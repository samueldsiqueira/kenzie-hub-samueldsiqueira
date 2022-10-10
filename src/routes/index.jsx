import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login } from '../pages/Login';
// import { Register } from '../pages/Register/Register';
// import { Dashboard } from '../pages/Dashboard/Dashboard'
// import { notFound } from '../pages/NotFound/NotFound'


const RoutesMain = () => (
  <Routes>

    <Route path='/' element={<Login />} />


  </Routes >
);

export default RoutesMain;