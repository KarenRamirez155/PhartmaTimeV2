import { Dialog } from '@headlessui/react';
import { Dispatch, SetStateAction } from 'react';
import { IoMedkitOutline } from 'react-icons/io5';
import { InputTransparent } from '../../ui/InputTransparent';

interface ControlMedicamentoFormProps {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const ControlMedicamentoForm = ({
	isOpen,
	setIsOpen,
}: ControlMedicamentoFormProps) => {
	return (
		<Dialog open={isOpen} onClose={() => setIsOpen(false)}>
			<div className="fixed inset-0 flex w-screen items-center justify-center p-4">
				<Dialog.Panel className="max-w-[48rem] p-12 mx-auto space-y-8 bg-blue-900 bg-opacity-80 text-white">
					<i className="flex items-center justify-center">
						<IoMedkitOutline size={72} />
					</i>
					<div className="grid grid-cols-1 gap-2">
						<InputTransparent placeholder="Nombre de medicamento" />
						<InputTransparent placeholder="Indicaciones" />
						<InputTransparent placeholder="Dosis" />
						<InputTransparent placeholder="Contraindicaciones" />
						<InputTransparent placeholder="Forma de presentación" />
					</div>
					<div className="grid grid-cols-2 gap-6 mx-6">
						<button className="bg-white text-black transition-colors  rounded-md hover:bg-slate-200">
							Cancelar
						</button>
						<button className="bg-white text-black transition-colors  rounded-md hover:bg-slate-200">
							Registrar Medicamento
						</button>
					</div>
				</Dialog.Panel>
			</div>
		</Dialog>
	);
};
