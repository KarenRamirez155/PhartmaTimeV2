const URL_API = import.meta.env.VITE_URL_API;

export const LOGIN = () => URL_API + 'User/Login';
export const REGISTER = () => URL_API + 'User/Register';

export const GET_PATIENT = () => URL_API + 'Patient/ReadPatient';
