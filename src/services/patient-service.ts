import axios from 'axios';
import {
	GET_PATIENT,
	REGISTER_PATIENT,
	UPDATE_PATIENT,
} from '../config/endpoints';
import { PacienteModel } from '../models/PacienteModel';

export const getAllPacientesService = async (): Promise<PacienteModel[]> => {
	const result = await axios.post(GET_PATIENT(), {
		headers: { 'Content-Type': 'application/json' },
	});
	if (result.status === 200) return result.data.usuarios ?? [];
	throw new Error(`${result.status}`);
};

export const registerPacienteService = async (paciente: PacienteModel) => {
	const result = await axios.post(REGISTER_PATIENT(), paciente, {
		headers: { 'Content-Type': 'application/json' },
	});
	if (result.status === 200) return true;
	throw new Error(`${result.status}`);
};

export const updatePacienteService = async (paciente: PacienteModel) => {
	const result = await axios.post(UPDATE_PATIENT(), paciente, {
		headers: { 'Content-Type': 'application/json' },
	});
	if (result.status === 200) return true;
	throw new Error(`${result.status}`);
};
