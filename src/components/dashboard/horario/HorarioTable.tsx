import { useEffect, useState } from 'react';
import { TutorSchedule } from '../../../models/TutorShedule';

export interface HorarioTableProps {
	tutorSchedules: TutorSchedule[];
}

export const HorarioTable = ({ tutorSchedules }: HorarioTableProps) => {
	const [data, setData] = useState<TutorSchedule[]>([]);
	useEffect(() => {
		setData(tutorSchedules);
	}, [tutorSchedules]);

	return (
		<div>
			{data.map((schedules) => (
				<div key={schedules?.paciente ?? ''}>
					<h4 className="text-black font-bold mb-4 text-xl">
						{schedules?.paciente ?? ''}
					</h4>
					<table className="text-black font-light bg-cyan-400 w-full">
						<thead className="text-left border-b ">
							<tr>
								<th>Usuario</th>
								<th>Medicamento</th>
								<th>Durante</th>
								<th>Dosis</th>
								<th>Intervalo</th>
							</tr>
						</thead>
						<tbody className="bg-cyan-100">
							{schedules &&
								schedules.schedule.map((sc, i) => (
									<tr className="border-b border-black" key={`schedule-${i}`}>
										<td>{sc.usuario}</td>
										<td>{sc.medicamento}</td>
										<td>{sc.durante}</td>
										<td>{sc.dosis}</td>
										<td>{`${sc.intervalo}`}</td>
									</tr>
								))}
						</tbody>
					</table>
				</div>
			))}
		</div>
	);
};
