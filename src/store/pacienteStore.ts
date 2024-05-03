import { create } from 'zustand';
import { PacienteModel } from '../models/PacienteModel';
import { getAllPacientesService } from '../services/patient-service';

export interface PacienteStoreType {
	pacientes: PacienteModel[];
	getAllPacientes: (idTutor: number) => void;
}

export const usePacienteStore = create<PacienteStoreType>()((set) => ({
	pacientes: [],
	getAllPacientes: (idTutor: number) => {
		getAllPacientesService(idTutor).then((pacientes) => {
			set({ pacientes: pacientes });
		});
	},
}));
