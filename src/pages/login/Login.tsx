import { Field, Form, Formik } from 'formik';
import './login.css';
import { LoginModel } from '../../models/LoginModel';
import { LuLogIn } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import api from '../../config/api';

export const Login = () => {
	return (
		<div className="bg-login">
			<Formik
				initialValues={{
					correo: '',
					contrasena: '',
				}}
				onSubmit={(values: LoginModel) => {
					api
						.post('/login', values)
						.then((r) => {
							console.log(r.data.mensaje);
						})
						.catch((e) => {
							console.error(e);
						});
				}}
			>
				{() => (
					<Form className="form">
						<LuLogIn size={82} className="icon-login" />
						<Field className="input-field" placeholder="usuario" type="text" name="correo" />
						<Field
							className="input-field"
							placeholder="contraseña"
							type="password"
							name="contrasena"
						/>
						<Link to={'/'} className="link">
							Recuperar Contraseña
						</Link>
						<div className="button-container">
							<button className="button-primary">Ingresar</button>
							<button className="button-primary">
								¿No tienes cuenta? ¡Regístrate!
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
};
