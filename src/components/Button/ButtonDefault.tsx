import React, { ButtonHTMLAttributes } from 'react';
import { BtnComponent } from './style'

interface IbuttonPops extends ButtonHTMLAttributes<HTMLInputElement>{
  bgColor?: string;
  children: string;
  onclick: any;
}

const btnDefault = ({
  bgColor,
  onclick,
  type,
  children,
  ...rest
}:IbuttonPops) => {
  return (
    <BtnComponent bgColor={bgColor} type={type} onClick={onclick}>{children}</BtnComponent>
  )



}

export default btnDefault;