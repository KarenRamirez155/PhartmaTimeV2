import axios from 'axios';
import { SCHEDULE, TUTOR_SCHEDULE } from '../config/endpoints';
import { Schedule } from '../models/Schedule';
import { TutorSchedule } from '../models/TutorShedule';
import { tutorScheduleAdapter } from '../adapters/tutorScheduleAdapter';
import cookies from 'js-cookie';

const token = cookies.get('user-token');

export const getAllScheduleService = async (
	idUsuario: number
): Promise<Schedule[]> => {
	const result = await axios.post(
		SCHEDULE(),
		{ idUsuario },
		{
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + token,
			},
		}
	);

	if (result.status === 200) return result.data.usuarios ?? [];
	throw new Error(`${result.status}`);
};

export const getAllTutorScheduleService = async (
	idUsuario: number
): Promise<TutorSchedule[]> => {
	const result = await axios.post(
		TUTOR_SCHEDULE(),
		{ idUsuario },
		{
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + token,
			},
		}
	);

	if (result.status === 200) {
		return tutorScheduleAdapter(result.data.usuarios) ?? [];
	}
	throw new Error(`${result.status}`);
};
