import axios from 'axios';
import { REPORT } from '../config/endpoints';
import cookies from 'js-cookie';

const token = cookies.get('user-token');

export const generateReportService = async (
	IdUsuario: number
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
