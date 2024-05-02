import { ReactNode } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

interface LinkAsideDashboardProps extends NavLinkProps {
	children: ReactNode;
}

export const LinkAsideDashboard = ({
	className,
	children,
	...props
}: LinkAsideDashboardProps) => {
	return (
		<NavLink
			{...props}
			className={({ isActive }) =>
				`bg-white w-fullpy-2 text-xl hover:bg-cyan-400 text-balance transition-colors text-center font-medium rounded-md  ${className} ${
					isActive ? '!bg-cyan-400' : ''
				}`
			}
		>
			<span>{children}</span>
		</NavLink>
	);
};
