import { TutorSchedule } from '../models/TutorShedule';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const tutorScheduleAdapter = (res: any[]): TutorSchedule[] => {
	const response: TutorSchedule[] = [];
	res.forEach((row) => {
		const paciente = response.find((q) => q.paciente === row.usuario);
		if (paciente) {
			paciente.schedule.push({
				dosis: row.dosis,
				durante: row.durante,
				intervalo: row.intervalo,
				medicamento: row.medicamento,
				id_tutor: row.id_tutor,
				usuario: row.usuario,
			});
		} else {
			response.push({
				paciente: row.usuario,
				schedule: [
					{
						dosis: row.dosis,
						durante: row.durante,
						intervalo: row.intervalo,
						medicamento: row.medicamento,
						id_tutor: row.id_tutor,
						usuario: row.usuario,
					},
				],
			});
		}
	});
	return response;
};
