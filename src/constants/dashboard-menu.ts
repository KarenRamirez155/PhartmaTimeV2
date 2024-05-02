export type Rol = 'medico' | 'tutor' | 'paciente';
export interface DashBoardMenuProps {
	title: string;
	href: string;
	rol: Rol[];
}
export const DASHBOARD_MENU: DashBoardMenuProps[] = [
	{
		title: 'Pacientes',
		href: '/dashboard/pacientes',
		rol: ['tutor'],
	},
	{
		title: 'Asignación de medicamentos',
		href: '/dashboard/asignacion-medicamentos',
		rol: ['tutor'],
	},
	{
		title: 'Horario',
		href: '/dashboard/horario',
		rol: ['paciente', 'tutor'],
	},
	{
		title: 'Reportes',
		href: '/dashboard/reportes',
		rol: ['medico'],
	},
	{
		title: 'Control de medicamentos',
		href: '/dashboard/control-medicamentos',
		rol: ['medico'],
	},
];
