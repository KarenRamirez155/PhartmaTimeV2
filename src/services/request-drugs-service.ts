import axios from 'axios';
import { GET_REQUEST_DRUGS, REQUEST_NEW_DRUGS } from '../config/endpoints';
import { RequestDrug } from '../models/RequestDrug';
import { NewDrug } from '../models/NewDrug';

export const getRequestDrugsService = async (): Promise<RequestDrug[]> => {
	const result = await axios.post(GET_REQUEST_DRUGS(), {
		headers: { 'Content-Type': 'application/json' },
	});
	if (result.status === 200) return result.data.solicitudes ?? [];
	throw new Error(`${result.status}`);
};

export const RequestNewDrugsService = async (values: NewDrug) => {
	console.log(values);

	const result = await axios.post(REQUEST_NEW_DRUGS(), values, {
		headers: { 'Content-Type': 'application/json' },
	});
	if (result.status === 200) return true;
	throw new Error(`${result.status}`);
};
