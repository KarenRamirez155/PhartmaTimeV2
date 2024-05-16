import { useEffect, useState } from 'react';
import { useScheduleStore } from '../../../store/scheduleStore';
import { useUserStore } from '../../../store/userStore';
import { HorarioTable } from '../../../components/dashboard/horario/HorarioTable';
import { TutorSchedule } from '../../../models/TutorShedule';
import { useTutorScheduleStore } from '../../../store/tutorScheduleStore';
import { generateReportService } from '../../../services/report-service';

const Horarios = () => {
	const [tutorSchedule, setTutorSchedule] = useState<TutorSchedule[]>([]);
	const [loading, setLoading] = useState(false);

	const { getAllSchedule, schedules } = useScheduleStore();
	const { getAllTutorSchedule, tutorSchedules } = useTutorScheduleStore();

	const { profile } = useUserStore();

	const handleGenerateReport = () => {
		setLoading(true);
		generateReportService(profile.idUsuario)
			.then((blob) => {
				const url = window.URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.style.display = 'none';
				a.href = url;
				a.download = 'reporte.pdf';
				document.body.appendChild(a);
				a.click();
				window.URL.revokeObjectURL(url);
			})
			.catch((err) => console.error(JSON.stringify(err)))
			.finally(() => setLoading(false));
	};

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
			<div className="text-black flex justify-between w-full items-center">
				<h5 className="text-lg font-semibold">Horario Medicinal</h5>
				{profile.rol === 'tutor' && (
					<button
						onClick={handleGenerateReport}
						className="bg-pink-300 hover:bg-pink-400 transition-colors px-3 rounded-lg font-medium py-1 disabled:bg-pink-200"
						disabled={loading}
					>
						{loading ? 'Generando...' : 'Generar Reporte'}
					</button>
				)}
			</div>

			<HorarioTable tutorSchedules={tutorSchedule} />
		</div>
	);
};
export default Horarios;
