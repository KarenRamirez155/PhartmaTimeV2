import { Field, Form, Formik } from 'formik';
import './login.css';
import { LoginModel } from '../../models/LoginModel';
import { LuLogIn } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import { loginService } from '../../services/user-service';
import * as yup from 'yup';

const loginSchema = yup.object({
	correo: yup.string().required('El campo correo es requerido'),
	contrasena: yup.string().required('El campo contrasena es requerido'),
});

export const Login = () => {
	return (
		<div className="bg-login">
			<Formik
				validationSchema={loginSchema}
				initialValues={{
					correo: '',
					contrasena: '',
				}}
				onSubmit={(values: LoginModel) => {
					loginService(values)
						.then((data) => {
							console.log(data);
						})
						.catch((error) => {
							console.log(error);
						});
				}}
			>
				{({ errors, touched }) => (
					<Form className="form">
						<LuLogIn size={82} className="icon-login" />
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
							<button className="button-primary">Ingresar</button>
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
