import axios from 'axios';
import {
	LOGIN,
	RECOVERY_PASSWORD,
	RECOVER_ACCOUNT,
	REGISTER,
} from '../config/endpoints';
import { LoginModel } from '../models/LoginModel';
import { Profile } from '../models/Profile';
import { RegisterModel } from '../models/RegisterModel';

export const loginService = async (values: LoginModel): Promise<Profile> => {
	const result = await axios.post(LOGIN(), values, {
		headers: { 'Content-Type': 'application/json' },
	});

	if (result.status === 200) return result.data;
	throw new Error(`${result.data.message}`);
};

export const registerService = async (
	values: RegisterModel
): Promise<boolean> => {
	const result = await axios.post(REGISTER(), values, {
		headers: { 'Content-Type': 'application/json' },
	});
	if (result.status === 200) return true;
	throw new Error(`${result.status}`);
};

export const recoverPasswordService = async (correo: string) => {
	console.log(correo);

	const result = await axios.post(
		RECOVERY_PASSWORD(),
		{ destinatario: correo },
		{
			headers: { 'Content-Type': 'application/json' },
		}
	);
	if (result.status === 200) return true;
	throw new Error(`${result.status}`);
};

export const changePasswordService = async (
	idUsuario: string,
	contrasena: string
) => {
	const result = await axios.post(
		RECOVERY_PASSWORD(),
		{ idUsuario, contrasena },
		{
			headers: { 'Content-Type': 'application/json' },
		}
	);
	if (result.status === 200) return true;
	throw new Error(`${result.status}`);
};

export const recoverAccountService = async (idUsuario: number) => {
	const result = await axios.post(
		RECOVER_ACCOUNT(),
		{ idUsuario },
		{
			headers: { 'Content-Type': 'application/json' },
		}
	);
	if (result.status === 200) return true;
	throw new Error(`${result.status}`);
};
