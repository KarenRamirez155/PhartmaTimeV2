import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Register } from './pages/register/Register';
import { Login } from './pages/login/Login';
import { RecoveryPassword } from './pages/recovery-password/RecoveryPassword';
import DashboardLayout from './layouts/DashboardLayout';
import Pacientes from './pages/dashboard/pacientes/Pacientes';
import { Page404 } from './pages/404/404';
import AsignacionMedicamentos from './pages/dashboard/asignacion-medicamentos/AsignacionMedicamentos';
import ControlMedicamentos from './pages/dashboard/control-medicamentos/ControlMedicamentos';
import Reportes from './pages/dashboard/reportes/Reportes';
import Horarios from './pages/dashboard/horarios/Horarios';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/recovery" element={<RecoveryPassword />} />
				<Route path="/dashboard" element={<DashboardLayout />}>
					<Route path="pacientes" element={<Pacientes />} />
					<Route
						path="asignacion-medicamentos"
						element={<AsignacionMedicamentos />}
					/>
					<Route
						path="control-medicamentos"
						element={<ControlMedicamentos />}
					/>
					<Route path="horario" element={<Horarios />} />

					<Route path="reportes" element={<Reportes />} />
				</Route>
				<Route path="*" element={<Page404 />} />
			</Routes>
		</Router>
	);
};
export default App;
