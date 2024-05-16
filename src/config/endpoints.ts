const URL_API = import.meta.env.VITE_URL_API;

//Usuario
export const LOGIN = () => URL_API + 'User/Login';
export const REGISTER = () => URL_API + 'User/Register';
export const RECOVERY_PASSWORD = () => URL_API + 'User/RecoverPasword';
export const CHANGE_PASSWORD = () => URL_API + 'User/ChangePassword';
export const RECOVER_ACCOUNT = () => URL_API + 'User/RecoverAccount';

//Pacientes
export const GET_PATIENT = () => URL_API + 'Patient/ReadPatient';
export const REGISTER_PATIENT = () => URL_API + 'Patient/CreatePatient';
export const UPDATE_PATIENT = () => URL_API + 'Patient/UpdatePatient';
export const DELETE_PATIENT = () => URL_API + 'Patient/DeletePatient';

//RequestDrugs
export const REQUEST_NEW_DRUGS = () => URL_API + 'RequestDrugs/RequestNewDrugs';

export const GET_REQUEST_DRUGS = () =>
	URL_API + 'RequestDrugs/ReadRequestDrugs';

//Drugs
export const ASSIGN_DRUGS = () => URL_API + 'Drugs/AssignDrugs';
export const GET_DRUGS = () => URL_API + 'Drugs/ReadDrug';

//Schedule
export const SCHEDULE = () => URL_API + 'Schedule/DataSchedulePatient';
export const TUTOR_SCHEDULE = () => URL_API + 'Schedule/DataScheduleTutor';

//Report
export const REPORT = () => URL_API + 'Report/ReportV2';
