import { RootObject } from './IData';

export interface ITech {
	id: string;
	title: string;
	status: string;
}

export interface ITechsUser {
	created_at: string;
	id: string;
	status: string;
	title: string;
	updated_at: string;
	user: RootObject;
}
