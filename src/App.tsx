import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Register } from './pages/register/Register';
import { Login } from './pages/login/Login';
import { RecoveryPassword } from './pages/recovery-password/RecoveryPassword';
import DashboardLayout from './layouts/DashboardLayout';
import Pacientes from './pages/dashboard/pacientes/Pacientes';
import { Page404 } from './pages/404/404';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="*" element={<Page404 />} />
				<Route path="/Login" element={<Login />} />
				<Route path="/Register" element={<Register />} />
				<Route path="/Recovery" element={<RecoveryPassword />} />
				<Route path="/dashboard" element={<DashboardLayout />}>
					<Route path="pacientes" element={<Pacientes />}></Route>
				</Route>
			</Routes>
		</Router>
	);
};
export default App;
