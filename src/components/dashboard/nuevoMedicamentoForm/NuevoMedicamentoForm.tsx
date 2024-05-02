import { Dialog } from '@headlessui/react';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { IoMedicalOutline } from 'react-icons/io5';
import { InputTransparent } from '../../ui/InputTransparent';
import { TextAreaTransparent } from '../../ui/TextAreaTransparent';
import { Form, Formik } from 'formik';
import { NewDrug } from '../../../models/NewDrug';
import { useUserStore } from '../../../store/userStore';
import { RequestNewDrugsService } from '../../../services/request-drugs-service';
import { useRequestDrugsStore } from '../../../store/requestDrugsStore';
import * as yup from 'yup';

const nuevoMedicamentoSchema = yup.object({
	idUsuario: yup.number().required(),
	medicamento: yup.string().required(),
	usoDado: yup.string().required(),
});

interface NuevoMedicamentoFormProps {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const NuevoMedicamentoForm = ({
	isOpen,
	setIsOpen,
}: NuevoMedicamentoFormProps) => {
	const { profile } = useUserStore();
	const { getAllRequestDrugs } = useRequestDrugsStore();
	const [error, setError] = useState('');

	useEffect(() => {
		setError('');
	}, [isOpen]);

	return (
		<Dialog open={isOpen} onClose={() => setIsOpen(false)}>
			<div className="fixed inset-0 flex w-screen items-center justify-center p-4">
				<Dialog.Panel className="max-w-[48rem] p-12 mx-auto space-y-8 bg-blue-900 bg-opacity-80 text-white">
					<i className="flex items-center justify-center">
						<IoMedicalOutline size={72} />
					</i>
					<Formik
						validationSchema={nuevoMedicamentoSchema}
						initialValues={{
							idUsuario: profile.idUsuario,
							medicamento: '',
							usoDado: '',
						}}
						onSubmit={(values: NewDrug) => {
							RequestNewDrugsService(values)
								.then(() => {
									setIsOpen(false);
									getAllRequestDrugs();
								})
								.catch((err: Error) => {
									setError(err.message);
								});
						}}
					>
						{({ handleBlur, handleChange, values, touched, errors }) => (
							<Form>
								{error && (
									<span className="w-full bg-red-100 text-red-900 border py-1 border-red-900">
										{error}
									</span>
								)}
								<div className="w-full">
									<label className="flex flex-col w-full">
										<span>Nombre del medicamento</span>
										<InputTransparent
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.medicamento}
											name="medicamento"
											placeholder=""
										/>
										{touched.medicamento && errors.medicamento && (
											<span className="text-red-500">{errors.medicamento}</span>
										)}
									</label>
									<label className="flex flex-col">
										<span>¿para qué usará el medicamento?</span>
										<TextAreaTransparent
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.usoDado}
											name="usoDado"
											placeholder=""
										/>
										{touched.usoDado && errors.usoDado && (
											<span className="text-red-500">{errors.usoDado}</span>
										)}
									</label>
								</div>
								<div className="grid grid-cols-2 gap-6 mx-6">
									<button className="bg-white text-black transition-colors  rounded-md hover:bg-slate-200">
										Cancelar
									</button>
									<button
										type="submit"
										className="bg-white text-black transition-colors  rounded-md hover:bg-slate-200"
									>
										Enviar Solicitud
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
