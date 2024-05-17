import axios from 'axios';
import { LOGIN } from '../config/endpoints';
import { LoginModel } from '../models/LoginModel';
import { REGISTER } from '../config/endpoints';

export const loginService = (values: LoginModel) => {
	return axios.post(LOGIN(), values, {
		headers: { 'Content-Type': 'application/json' },
	});
};


