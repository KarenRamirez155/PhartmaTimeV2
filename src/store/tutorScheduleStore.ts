import { create } from 'zustand';
import { getAllTutorScheduleService } from '../services/schedule-service';
import { TutorSchedule } from '../models/TutorShedule';

export interface TutorScheduleStoreType {
	tutorSchedules: TutorSchedule[];
	getAllTutorSchedule: (idTutor: number) => void;
}

export const useTutorScheduleStore = create<TutorScheduleStoreType>()(
	(set) => ({
		tutorSchedules: [],
		getAllTutorSchedule: (idTutor: number) => {
			getAllTutorScheduleService(idTutor).then((tutorSchedule) => {
				set({ tutorSchedules: tutorSchedule });
			});
		},
	})
);
