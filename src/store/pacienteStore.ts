import { create } from 'zustand';
import { PacienteModel } from '../models/PacienteModel';
import { getAllPacientesService } from '../services/patient-service';

export interface PacienteStoreType {
	pacientes: PacienteModel[];
	getAllPacientes: () => void;
}

export const usePacienteStore = create<PacienteStoreType>()((set) => ({
	pacientes: [],
	getAllPacientes: () => {
		getAllPacientesService().then((pacientes) => {
			set({ pacientes: pacientes });
		});
	},
}));
