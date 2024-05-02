import { IoMenuOutline } from 'react-icons/io5';
import { LinkAsideDashboard } from '../../ui/LinkAsideDashboard';
import { DASHBOARD_MENU } from '../../../constants/dashboard-menu';
import { useUserStore } from '../../../store/userStore';

export const Aside = () => {
	const { profile } = useUserStore();
	return (
		<div className="bg-primary-900 pt-5 rounded-lg shadow-lg space-y-8 pb-10 px-4 text-black flex flex-col min-w-[18rem]">
			<i className="bg-white w-fit p-1 hover:bg-cyan-400 cursor-pointer rounded-lg">
				<IoMenuOutline className="" size={32} />
			</i>
			{DASHBOARD_MENU.map((menu) => (
				<LinkAsideDashboard
					key={menu.href}
					to={menu.href}
					className={menu.rol.includes(profile.rol) ? '' : 'hidden'}
				>
					{menu.title}
				</LinkAsideDashboard>
			))}
		</div>
	);
};
