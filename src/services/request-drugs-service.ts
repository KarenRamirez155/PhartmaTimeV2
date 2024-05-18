import axios from 'axios';
import { GET_REQUEST_DRUGS, REQUEST_NEW_DRUGS } from '../config/endpoints';
import { RequestDrug } from '../models/RequestDrug';
import { NewDrug } from '../models/NewDrug';

import cookies from 'js-cookie';

const token = cookies.get('user-token');

export const getRequestDrugsService = async (): Promise<RequestDrug[]> => {
	const result = await axios.post(GET_REQUEST_DRUGS(), undefined, {
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + token,
		},
	});
	if (result.status === 200) return result.data.solicitudes ?? [];
	throw new Error(`${result.status}`);
};

export const RequestNewDrugsService = async (values: NewDrug) => {
	const result = await axios.post(REQUEST_NEW_DRUGS(), values, {
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + token,
		},
	});
	if (result.status === 200) return true;
	throw new Error(`${result.status}`);
};
