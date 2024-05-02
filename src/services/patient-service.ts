import axios from 'axios';
import {
	GET_PATIENT,
	REGISTER_PATIENT,
	UPDATE_PATIENT,
} from '../config/endpoints';
import { PacienteModel } from '../models/PacienteModel';

export const getAllPacientesService = async (): Promise<PacienteModel[]> => {
	/* const result = await axios.post(GET_PATIENT(), {
		headers: { 'Content-Type': 'application/json' },
	});
	if (result.status === 200) return result.data;
	throw new Error(`${result.status}`); */
	return [
		{
			nombre: 'Jhon',
			apellido: 'Doe',
			correo: 'jhon@email.com',
			edad: 18,
			genero: 1,
			idUsuario: 1020405060,
			telefono: '311124576',
		},
		{
			nombre: 'Jenny',
			apellido: 'Doe',
			correo: 'Jenny@email.com',
			edad: 27,
			genero: 2,
			idUsuario: 3020405060,
			telefono: '3111245768',
		},
	];
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
