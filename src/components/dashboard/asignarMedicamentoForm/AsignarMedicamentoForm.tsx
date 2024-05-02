import { Dialog } from '@headlessui/react';
import { Dispatch, SetStateAction } from 'react';
import { IoMedicalOutline } from 'react-icons/io5';
import { InputTransparent } from '../../ui/InputTransparent';
import { Form, Formik } from 'formik';
import { AssignDrug } from '../../../models/AssignDrug';
import * as yup from 'yup';
import { assignDrugService } from '../../../services/drugs-service';
import { useUserStore } from '../../../store/userStore';
import { useDrugsStore } from '../../../store/assignDrugs';
import { Drug } from '../../../models/Drug';

const AsignarMedicamentoSchema = yup.object({
	dosis: yup.string().required(),
	durante: yup.string().required(),
	id_medicamento: yup.number().required(),
	id_tutor: yup.number().required(),
	id_usuario: yup.number().required(),
	intervalo: yup.number().required(),
});

interface AsignarMedicamentoFormProps {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	drug?: Drug;
}

export const AsignarMedicamentoForm = ({
	isOpen,
	setIsOpen,
	drug,
}: AsignarMedicamentoFormProps) => {
	const { getAllDrugs } = useDrugsStore();
	const { profile } = useUserStore();
	return (
		<Dialog open={isOpen} onClose={() => setIsOpen(false)}>
			<div className="fixed inset-0 flex w-screen items-center justify-center p-4">
				<Dialog.Panel className="max-w-[48rem] p-12 mx-auto space-y-8 bg-blue-900 bg-opacity-80 text-white">
					<i className="flex items-center justify-center">
						<IoMedicalOutline size={72} />
					</i>
					<Formik
						validationSchema={AsignarMedicamentoSchema}
						initialValues={{
							dosis: '',
							durante: '',
							id_medicamento: drug?.idMedicamento ?? 0,
							id_tutor: profile.idUsuario,
							id_usuario: 0,
							intervalo: 0,
						}}
						onSubmit={(values: AssignDrug) => {
							assignDrugService(values).then(() => {
								setIsOpen(false);
								getAllDrugs();
							});
						}}
					>
						{({
							handleBlur,
							handleChange,
							values,
							errors,
							touched,
							setFieldValue,
						}) => (
							<Form>
								<div className="grid grid-cols-2 gap-2">
									<div>
										<InputTransparent
											onBlur={handleBlur}
											onChange={handleChange}
											value={values.durante}
											name="durante"
											placeholder="Durante"
										/>
										{errors.durante && touched.durante && (
											<span>{errors.durante}</span>
										)}
									</div>
									<div>
										<InputTransparent
											onBlur={handleBlur}
											onChange={(e) =>
												setFieldValue('id_usuario', Number(e.target.value))
											}
											value={values.id_usuario}
											type="number"
											name="id_usuario"
											placeholder="Cédula"
										/>
										{errors.id_usuario && touched.id_usuario && (
											<span>{errors.id_usuario}</span>
										)}
									</div>
									<div>
										<InputTransparent
											onBlur={handleBlur}
											onChange={handleChange}
											value={values.dosis}
											name="dosis"
											placeholder="Dosis"
										/>
										{errors.dosis && touched.dosis && (
											<span>{errors.dosis}</span>
										)}
									</div>
									<div>
										<InputTransparent
											onBlur={handleBlur}
											onChange={(e) =>
												setFieldValue('intervalo', Number(e.target.value))
											}
											value={values.intervalo}
											name="intervalo"
											type="number"
											placeholder="Intervalo"
										/>
										{errors.intervalo && touched.intervalo && (
											<span>{errors.intervalo}</span>
										)}
									</div>
								</div>
								<div className="grid grid-cols-2 gap-6 mx-6">
									<button className="bg-white text-black transition-colors  rounded-md hover:bg-slate-200">
										Cancelar
									</button>
									<button className="bg-white text-black transition-colors  rounded-md hover:bg-slate-200">
										Asignar
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
