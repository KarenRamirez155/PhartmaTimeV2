import axios from 'axios';
import { AssignDrug } from '../models/AssignDrug';
import { ASSIGN_DRUGS, GET_ASSIGN_DRUGS } from '../config/endpoints';
import { Drug } from '../models/Drug';

export const assignDrugService = async (assignDrug: AssignDrug) => {
	const result = await axios.post(ASSIGN_DRUGS(), assignDrug, {
		headers: { 'Content-Type': 'application/json' },
	});
	if (result.status === 200) return true;
	throw new Error(`${result.status}`);
};

export const getAllAsignDrugService = async (): Promise<Drug[]> => {
	const result = await axios.post(GET_ASSIGN_DRUGS(), {
		headers: { 'Content-Type': 'application/json' },
	});
	if (result.status === 200)
		return [
			{
				idMedicamento: 4050,
				contraindicaciones: 'Ninguna',
				nombre: 'Azetaminofen',
				presentacion: 'pastilla',
				sirvePara: 'TODO',
			},
		];
	throw new Error(`${result.status}`);
};
