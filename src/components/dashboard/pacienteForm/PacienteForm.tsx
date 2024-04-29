import { Dispatch, SetStateAction } from 'react';
import { Dialog } from '@headlessui/react';
import { IoPerson } from 'react-icons/io5';
import { InputTransparent } from '../../ui/InputTransparent';

interface PacienteFormProps {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}
const PacienteForm = ({ isOpen, setIsOpen }: PacienteFormProps) => {
	return (
		<Dialog open={isOpen} onClose={() => setIsOpen(false)}>
			<div className="fixed inset-0 flex w-screen items-center justify-center p-4">
				<Dialog.Panel className="max-w-[48rem] p-12 mx-auto space-y-8 bg-blue-900 bg-opacity-80 text-white">
					<i className="flex items-center justify-center">
						<IoPerson size={72} />
					</i>
					<div className="grid grid-cols-2 gap-2">
						<InputTransparent placeholder="Nombre" />
						<InputTransparent placeholder="Genero" />
						<InputTransparent placeholder="Apellido" />
						<InputTransparent placeholder="Edad" />
						<InputTransparent placeholder="Cédula" />
						<InputTransparent placeholder="Enfermedades" />
						<InputTransparent placeholder="Correo" />
						<InputTransparent placeholder="Restricciones" />
					</div>
					<div className="grid grid-cols-2 gap-6 mx-6">
						<button className="bg-white text-black transition-colors  rounded-md hover:bg-slate-200">
							Cancelar
						</button>
						<button className="bg-white text-black transition-colors  rounded-md hover:bg-slate-200">
							Guardar Paciente
						</button>
					</div>
				</Dialog.Panel>
			</div>
		</Dialog>
	);
};
export default PacienteForm;
