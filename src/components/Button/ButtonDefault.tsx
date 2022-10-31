import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { BtnComponent } from './style';

interface IbuttonPops extends ButtonHTMLAttributes<HTMLButtonElement> {
	backgroundColor: string;
	children: ReactNode;
}

const btnDefault: React.FC<IbuttonPops> = ({ backgroundColor, children, ...rest }) => {
	return <BtnComponent backgroundColor={backgroundColor}> {children} </BtnComponent>;
};

export default btnDefault;
