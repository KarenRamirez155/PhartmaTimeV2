import { create } from 'zustand';
import { Schedule } from '../models/Schedule';
import { getAllScheduleService } from '../services/schedule-service';

export interface ScheduleStoreType {
	schedules: Schedule[];
	getAllSchedule: (idUsuario: number) => void;
}

export const useScheduleStore = create<ScheduleStoreType>()((set) => ({
	schedules: [],
	getAllSchedule: (idUsuario: number) => {
		getAllScheduleService(idUsuario).then((schedule) => {
			set({ schedules: schedule });
		});
	},
}));
