import axios from 'axios';
import { AssignDrug } from '../models/AssignDrug';
import { ASSIGN_DRUGS, GET_DRUGS } from '../config/endpoints';
import { Drug } from '../models/Drug';

export const assignDrugService = async (assignDrug: AssignDrug) => {
	console.log(assignDrug);

	const result = await axios.post(ASSIGN_DRUGS(), assignDrug, {
		headers: { 'Content-Type': 'application/json' },
	});
	if (result.status === 200) return true;
	throw new Error(`${result.status}`);
};

export const getAllDrugService = async (): Promise<Drug[]> => {
	const result = await axios.post(GET_DRUGS(), {
		headers: { 'Content-Type': 'application/json' },
	});

	if (result.status === 200) return result.data.drugsList ?? [];
	throw new Error(`${result.status}`);
};
