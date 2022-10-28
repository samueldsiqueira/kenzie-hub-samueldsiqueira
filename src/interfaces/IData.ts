import { ITech } from './IThechs';
import { IWork } from './IWorks';

export interface RootObject {
	id: string;
	name: string;
	email: string;
	course_module: string;
	bio: string;
	contact: string;
	techs: [ITech];
	works: [IWork];
	created_at: Date;
	updated_at: Date;
	avatar_url: string;
}
