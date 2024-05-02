import { Form, Formik, Field } from 'formik';
import { RegisterModel } from '../../models/RegisterModel';

import './register.css';
import { registerService } from '../../services/user-service';
import { useState } from 'react';
import * as yup from 'yup';
import { Link } from 'react-router-dom';

const registerSchema = yup.object({
	nombre: yup.string().required('El campo nombre es requerido'),
	apellido: yup.string().required('El campo apellido es requerido'),
	idUsuario: yup.number().required('El campo idUsuario es requerido'),
	telefono: yup.string().required('El campo telefono es requerido'),
	edad: yup.number().required('El campo edad es requerido'),
	correo: yup.string().required('El campo correo es requerido'),
	contrasena: yup
		.string()
		.matches(
			/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!#$%?]).{8,}$/,
			'Minimo: 8 carácteres, 1 Mayúscula, 1 número, 1 carácter especial (!#$%?)'
		)
		.required('El campo contraseña es requerido'),
	genero: yup.number().required('El campo genero es requerido'),
});

export const Register = () => {
	const [message, setMessage] = useState({
		isSuccess: false,
		message: '',
	});

	return (
		<div className="bg-register">
			<Formik
				validationSchema={registerSchema}
				initialValues={{
					nombre: '',
					apellido: '',
					idUsuario: 0,
					telefono: '',
					edad: 0,
					correo: '',
					contrasena: '',
					genero: 0,
				}}
				onSubmit={(values: RegisterModel) => {
					registerService(values)
						.then(() => {
							setMessage({
								isSuccess: true,
								message: 'Se ha registrado el usuario',
							});
						})
						.catch(() => {
							setMessage({
								isSuccess: false,
								message: 'Error al intentar registrar el usuario',
							});
						});
				}}
			>
				{({ errors, touched }) => (
					<Form className="form">
						<div className="form-register">
							<span
								className={`col-span-2 text-center border-2 py-2 ${
									message.isSuccess
										? 'bg-green-100 border-green-900 text-green-900'
										: 'bg-red-100 border-red-900 text-red-900'
								} ${!message.message && 'hidden'}`}
							>
								{message.message}
							</span>
							<div>
								<Field
									placeholder="nombre"
									name="nombre"
									className="input-field"
								/>
								{touched.nombre && errors.nombre && (
									<span className="text-red-500">{errors.nombre}</span>
								)}
							</div>
							<div>
								<Field
									placeholder="apellido"
									name="apellido"
									className="input-field"
								/>
								{touched.apellido && errors.apellido && (
									<span className="text-red-500">{errors.apellido}</span>
								)}
							</div>
							<div>
								<Field
									placeholder="idUsuario"
									name="idUsuario"
									className="input-field"
									type="number"
								/>
								{touched.idUsuario && errors.idUsuario && (
									<span className="text-red-500">{errors.idUsuario}</span>
								)}
							</div>
							<div>
								<Field
									placeholder="telefono"
									name="telefono"
									className="input-field"
								/>
								{touched.telefono && errors.telefono && (
									<span className="text-red-500">{errors.telefono}</span>
								)}
							</div>
							<div>
								<Field
									placeholder="edad"
									name="edad"
									className="input-field"
									type="number"
								/>
								{touched.edad && errors.edad && (
									<span className="text-red-500">{errors.edad}</span>
								)}
							</div>
							<div>
								<Field
									placeholder="correo"
									name="correo"
									className="input-field"
								/>
								{touched.correo && errors.correo && (
									<span className="text-red-500">{errors.correo}</span>
								)}
							</div>

							<div style={{ width: '100%' }}>
								<Field
									placeholder="contrasena"
									name="contrasena"
									type="password"
									className="input-field"
								/>
								{touched.contrasena && errors.contrasena && (
									<span className="text-red-500">{errors.contrasena}</span>
								)}
							</div>
							<div>
								<Field
									placeholder="genero"
									name="genero"
									type="number"
									className="input-field h-fit"
								/>
								{touched.genero && errors.genero && (
									<span className="text-red-500">{errors.genero}</span>
								)}
							</div>
						</div>
						<div className="button-container">
							<Link className="button-primary" to={'/login'}>
								¿Ya tienes cuenta?
							</Link>
							<button className="button-primary" type="submit">
								Crear cuenta
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
};
