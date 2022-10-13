import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
// import { Register } from '../pages/Register/Register';
// import { Dashboard } from '../pages/Dashboard/Dashboard'
// import { notFound } from '../pages/NotFound/NotFound'


const RoutesMain = () => (
  <Routes>

    <Route path='/' element={<Home />} >

    </Route>


  </Routes >
);

export default RoutesMain;