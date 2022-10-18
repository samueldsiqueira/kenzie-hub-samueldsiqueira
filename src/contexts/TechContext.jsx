import { createContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import apiGateway from '../services/apiGateway';
import { toast } from 'react-toastify';


export const TechContext = createContext({});

const TechProvider = ({ children }) => {
  const [techs, setTechs] = useState([]);
  return (
    <TechContext.Provider >{children}</TechContext.Provider>
  )
}