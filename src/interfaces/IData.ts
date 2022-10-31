import { ITech, ITechsUser } from './IThechs';
import { IWork } from './IWorks';

export interface RootObject {
	id: string;
	name: string;
	email: string;
	course_module: string;
	bio: string;
	contact: string;
	techs: [ITechsUser];
	works: [IWork];
	created_at: string;
	updated_at: string;
	avatar_url: string;
}
