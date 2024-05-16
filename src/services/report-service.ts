import axios from 'axios';
import { REPORT } from '../config/endpoints';
import cookies from 'cookies-js';

const token = cookies.get('user-token');

export const generateReportService = async (
	IdUsuario: number
): Promise<any> => {
	const result = await axios.post(
		REPORT(),
		{ IdUsuario },
		{
			responseType: 'blob',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + token,
			},
		}
	);

	if (result.status === 200) return result.data;
	throw new Error(`${result.status}`);
};
