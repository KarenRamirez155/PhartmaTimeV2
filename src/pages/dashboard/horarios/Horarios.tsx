import { useEffect, useState } from 'react';
import { useScheduleStore } from '../../../store/scheduleStore';
import { useUserStore } from '../../../store/userStore';
import { HorarioTable } from '../../../components/dashboard/horario/HorarioTable';
import { TutorSchedule } from '../../../models/TutorShedule';
import { useTutorScheduleStore } from '../../../store/tutorScheduleStore';

const Horarios = () => {
	const [tutorSchedule, setTutorSchedule] = useState<TutorSchedule[]>([]);

	const { getAllSchedule, schedules } = useScheduleStore();
	const { getAllTutorSchedule, tutorSchedules } = useTutorScheduleStore();

	const { profile } = useUserStore();

	useEffect(() => {
		if (profile.rol === 'tutor') {
			getAllTutorSchedule(profile.idUsuario);
		} else {
			getAllSchedule(profile.idUsuario);
		}
	}, []);
	useEffect(() => {
		if (schedules.length > 0) {
			setTutorSchedule([
				{
					paciente: schedules[0].usuario ?? '',
					schedule: schedules,
				},
			]);
		} else {
			setTutorSchedule(tutorSchedules);
		}
	}, [schedules, tutorSchedules]);
	return (
		<div className="w-full space-y-4">
			<div className="text-black flex justify-center w-full items-center">
				<h5 className="text-lg font-semibold">Horario Medicinal</h5>
			</div>
			<HorarioTable tutorSchedules={tutorSchedule} />
		</div>
	);
};
export default Horarios;
