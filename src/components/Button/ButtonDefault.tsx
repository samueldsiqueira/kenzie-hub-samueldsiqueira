import React from 'react';
import { BtnComponent } from './style'


const btnDefault = ({ bgColor, onclick, type, children }) => {
  return (
    <BtnComponent bgColor={bgColor} type={type} onClick={onclick}>{children}</BtnComponent>
  )



}

export default btnDefault;