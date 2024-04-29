import { Form, Formik } from 'formik';
import './login.css';
import { LoginModel } from '../../models/LoginModel';
import { LuLogIn } from 'react-icons/lu';
import { Link } from 'react-router-dom';

export const Login = () => {
	return (
		<div className="bg-login">
			<Formik
				initialValues={{
					password: '',
					usuario: '',
				}}
				onSubmit={(values: LoginModel) => {
					console.log(values);
				}}
			>
				{() => (
					<Form className="form">
						<LuLogIn size={82} className="icon-login" />
						<input className="input-field" placeholder="usuario" type="text" />
						<input
							className="input-field"
							placeholder="contraseña"
							type="password"
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
