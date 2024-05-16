import { Field, Form, Formik } from 'formik';
import './login.css';
import { LoginModel } from '../../models/LoginModel';
import { LuLogIn } from 'react-icons/lu';
import { Link, useNavigate } from 'react-router-dom';
import { loginService } from '../../services/user-service';
import * as yup from 'yup';
import { useUserStore } from '../../store/userStore';
import { useEffect, useState } from 'react';
import { AxiosError } from 'axios';

const loginSchema = yup.object({
	correo: yup.string().required('El campo correo es requerido'),
	contrasena: yup.string().required('El campo contrasena es requerido'),
});

export const Login = () => {
	const { loginUser, isLogged } = useUserStore();
	const navigate = useNavigate();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (isLogged) {
			navigate('/dashboard');
		}
	}, []);

	return (
		<div className="bg-login">
			<Formik
				validationSchema={loginSchema}
				initialValues={{
					correo: '',
					contrasena: '',
				}}
				onSubmit={(values: LoginModel) => {
					setLoading(true);
					setError('');
					loginService(values)
						.then((data) => {
							loginUser(data);
							navigate('/dashboard');
						})
						.catch((error: AxiosError<{ mensaje: string }>) => {
							setError(error.response?.data?.mensaje ?? error.message);
						})
						.finally(() => {
							setLoading(false);
						});
				}}
			>
				{({ errors, touched }) => (
					<Form className="form">
						<LuLogIn size={82} className="icon-login" />
						{error && (
							<span className="bg-red-100 text-red-900 border border-red-900 py-1 text-center">
								{error}
							</span>
						)}
						<div>
							<Field
								className="input-field"
								placeholder="correo"
								type="text"
								name="correo"
							/>
							{touched.correo && errors.correo && (
								<span className="text-red-500">{errors.correo}</span>
							)}
						</div>
						<div>
							<Field
								className="input-field"
								placeholder="contraseña"
								type="password"
								name="contrasena"
							/>
							{touched.contrasena && errors.contrasena && (
								<span className="text-red-500">{errors.contrasena}</span>
							)}
						</div>
						<Link to={'/recovery'} className="link">
							Recuperar Contraseña
						</Link>
						<div className="button-container">
							<button
								className="button-primary"
								type="submit"
								disabled={loading}
							>
								{loading ? 'Cargando...' : 'Ingresar'}
							</button>
							<Link to={'/register'} className="button-primary">
								¿No tienes cuenta? ¡Regístrate!
							</Link>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
};
