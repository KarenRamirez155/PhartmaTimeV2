import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { IoPerson } from 'react-icons/io5';
import { InputTransparent } from '../../ui/InputTransparent';
import { Form, Formik } from 'formik';
import { PacienteModel } from '../../../models/PacienteModel';
import * as yup from 'yup';
import {
	registerPacienteService,
	updatePacienteService,
} from '../../../services/patient-service';
import { usePacienteStore } from '../../../store/pacienteStore';

const pacienteFormShcema = yup.object({
	apellido: yup.string().required(),
	correo: yup.string().email().required(),
	edad: yup.string().required(),
	genero: yup.string().required(),
	idUsuario: yup.number().required(),
	nombre: yup.string().required(),
	telefono: yup.string().required(),
});

interface PacienteFormProps {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	paciente?: PacienteModel;
}
const PacienteForm = ({ isOpen, setIsOpen, paciente }: PacienteFormProps) => {
	const { getAllPacientes } = usePacienteStore();
	const [error, setError] = useState('');
	useEffect(() => {
		setError('');
	}, [isOpen]);

	return (
		<Dialog open={isOpen} onClose={() => setIsOpen(false)}>
			<div className="fixed inset-0 flex w-screen items-center justify-center p-4">
				<Dialog.Panel className="max-w-[48rem] p-12 mx-auto space-y-8 bg-blue-900 bg-opacity-80 text-white">
					<i className="flex items-center justify-center">
						<IoPerson size={72} />
					</i>
					<Formik
						validationSchema={pacienteFormShcema}
						enableReinitialize
						initialValues={{
							apellido: paciente?.apellido ?? '',
							correo: paciente?.correo ?? '',
							edad: paciente?.edad ?? 0,
							genero: paciente?.genero ?? 0,
							idUsuario: paciente?.idUsuario ?? 0,
							nombre: paciente?.nombre ?? '',
							telefono: paciente?.telefono ?? '',
						}}
						onSubmit={(values: PacienteModel) => {
							if (paciente) {
								updatePacienteService(values)
									.then(() => {
										setIsOpen(false);
										getAllPacientes();
									})
									.catch((err: Error) => {
										setError(err.message);
									});
								return;
							}

							registerPacienteService(values)
								.then(() => {
									setIsOpen(false);
									getAllPacientes();
								})
								.catch((err: Error) => {
									setError(err.message);
								});
						}}
					>
						{({ handleChange, handleBlur, values, errors, touched }) => (
							<Form className="grid grid-cols-2 gap-2">
								{error && (
									<span className="bg-red-100 border text-center border-red-900 text-red-900 py-1 col-span-2">
										{error}
									</span>
								)}
								<div className="flex flex-col">
									<InputTransparent
										name="nombre"
										placeholder="Nombre"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.nombre}
									/>
									{touched.nombre && errors.nombre && (
										<span className="text-red-500">{errors.nombre}</span>
									)}
								</div>
								<div className="flex flex-col">
									<InputTransparent
										name="genero"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.genero}
										placeholder="Genero"
									/>
									{touched.genero && errors.genero && (
										<span className="text-red-500">{errors.genero}</span>
									)}
								</div>
								<div className="flex flex-col">
									<InputTransparent
										name="apellido"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.apellido}
										placeholder="Apellido"
									/>
									{touched.apellido && errors.apellido && (
										<span className="text-red-500">{errors.apellido}</span>
									)}
								</div>
								<div className="flex flex-col">
									<InputTransparent
										name="edad"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.edad}
										placeholder="Edad"
									/>
									{touched.edad && errors.edad && (
										<span className="text-red-500">{errors.edad}</span>
									)}
								</div>
								<div className="flex flex-col">
									<InputTransparent
										name="idUsuario"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.idUsuario}
										placeholder="Cédula"
									/>
									{touched.idUsuario && errors.idUsuario && (
										<span className="text-red-500">{errors.idUsuario}</span>
									)}
								</div>
								<div className="flex flex-col">
									<InputTransparent
										name="telefono"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.telefono}
										placeholder="Telefono"
									/>
									{touched.telefono && errors.telefono && (
										<span className="text-red-500">{errors.telefono}</span>
									)}
								</div>
								<div className="flex flex-col">
									<InputTransparent
										name="correo"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.correo}
										placeholder="Correo"
									/>
									{touched.correo && errors.correo && (
										<span className="text-red-500">{errors.correo}</span>
									)}
								</div>
								<div className="col-span-2 grid grid-cols-2 gap-6 mx-6">
									<button
										className="bg-white text-black transition-colors  rounded-md hover:bg-slate-200"
										onClick={() => setIsOpen(false)}
									>
										Cancelar
									</button>
									<button
										type="submit"
										className="bg-white text-black transition-colors rounded-md hover:bg-slate-200"
									>
										{paciente ? 'Modificar Paciente' : 'Guardar Paciente'}
									</button>
								</div>
							</Form>
						)}
					</Formik>
				</Dialog.Panel>
			</div>
		</Dialog>
	);
};
export default PacienteForm;
