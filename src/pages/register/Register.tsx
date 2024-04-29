import { Form, Formik, Field } from 'formik';
import { RegisterModel } from '../../models/RegisterModel';

import './register.css';
export const Register = () => {
	return (
		<div className="bg-register">
			<Formik
				initialValues={{
					apellidos: '',
					edad: '',
					email: '',
					identificacion: '',
					nombres: '',
					password: '',
					telefono: '',
				}}
				onSubmit={(values: RegisterModel) => {
					console.log(values);
				}}
			>
				{() => (
					<Form className="form">
						<div className="form-register">
							<Field
								placeholder="nombres"
								name="nombres"
								className="input-field"
							/>
							<Field
								placeholder="apellidos"
								name="apellidos"
								className="input-field"
							/>
							<Field
								placeholder="identificacion"
								name="identificacion"
								className="input-field"
							/>
							<Field
								placeholder="telefono"
								name="telefono"
								className="input-field"
							/>
							<Field placeholder="edad" name="edad" className="input-field" />
							<Field placeholder="email" name="email" className="input-field" />

							<div style={{ width: '100%' }}>
								<Field
									placeholder="password"
									name="password"
									className="input-field"
								/>
								<p>
									Minimo: 8 carácteres, 1Mayúscula, 1 número, 1 carácter
									especial (!#$%?)
								</p>
							</div>
						</div>
						<div className="button-container">
							<button className="button-primary">¿Ya tienes cuenta?</button>
							<button className="button-primary">Crear cuenta</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
};
