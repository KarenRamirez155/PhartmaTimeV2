import { IoMenuOutline } from 'react-icons/io5';
import { LinkAsideDashboard } from '../../ui/LinkAsideDashboard';

export const Aside = () => {
	return (
		<div className="bg-primary-900 pt-5 rounded-lg shadow-lg space-y-8 pb-10 px-4 text-black flex flex-col min-w-[18rem]">
			<i className="bg-white w-fit p-1 hover:bg-cyan-400 cursor-pointer rounded-lg">
				<IoMenuOutline className="" size={32} />
			</i>
			<LinkAsideDashboard to={'/dashboard/pacientes'}>
				Pacientes
			</LinkAsideDashboard>
			<LinkAsideDashboard to={'/dashboard'}>
				Asignación de medicamentos
			</LinkAsideDashboard>
			<LinkAsideDashboard to={'/dashboard'}>Horario</LinkAsideDashboard>
		</div>
	);
};
