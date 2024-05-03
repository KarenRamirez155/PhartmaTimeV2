import { Form, Formik } from 'formik';
import ButtonGreen from '../../components/ui/ButtonGreen';
import { Input } from '../../components/ui/Input';
import * as yup from 'yup';
import { recoverPasswordService } from '../../services/user-service';
import { useState } from 'react';

const RecoveryPassowrdSchema = yup.object({
	destinatario: yup.string().email().required(),
});

export const RecoveryPassword = () => {
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState({
		isSuccess: false,
		message: '',
	});

	return (
		<div className="bg-principal h-screen w-screen bg-cover bg-center flex justify-center items-center">
			<div className="mx-auto absolute bg-primary-400 shadow-lg rounded-lg min-w-[48rem]">
				<h4 className="bg-primary-900 text-center uppercase rounded-t-lg">
					Recuperar Contraseña
				</h4>

				<div className="mx-12 mt-4 mb-12 rounded-b-lg">
					{message.message && (
						<span
							className={`mb-4 border border-red-900 w-full flex justify-center ${
								message.isSuccess
									? 'bg-green-100 text-green-900 border-green-900'
									: 'bg-red-100 text-red-900 border-red-900'
							}`}
						>
							{message.message}
						</span>
					)}
					<div className="flex w-full">
						<Formik
							validationSchema={RecoveryPassowrdSchema}
							initialValues={{
								destinatario: '',
							}}
							onSubmit={({ destinatario }: { destinatario: string }) => {
								setLoading(true);
								recoverPasswordService(destinatario)
									.then(() => {
										setMessage({
											isSuccess: true,
											message:
												'Se ha enviado un correo con la contraseña nueva',
										});
									})
									.catch(() => {
										setMessage({
											isSuccess: false,
											message: 'ha ocurrido un error o el usuario no existe',
										});
									})
									.finally(() => setLoading(false));
							}}
						>
							{({ errors, touched, handleBlur, handleChange }) => (
								<Form className="flex items-center w-full">
									<label className="flex flex-col text-center w-full">
										<span className="text-black font-semibold">
											Correo electrónico
										</span>
										<Input
											type="text"
											placeholder="Escriba aqui"
											name="destinatario"
											onBlur={handleBlur}
											onChange={handleChange}
										/>

										<span
											className={`text-red-500 invisible ${
												errors.destinatario &&
												touched.destinatario &&
												'!visible'
											}`}
										>
											{errors.destinatario}.
										</span>
									</label>
									<div className="mx-4 px-4 min-w-fit">
										<ButtonGreen type="submit" disabled={loading}>
											{loading ? 'Cargando...' : 'Reiniciar Contraseña'}
										</ButtonGreen>
									</div>
								</Form>
							)}
						</Formik>
					</div>
				</div>
			</div>
		</div>
	);
};
