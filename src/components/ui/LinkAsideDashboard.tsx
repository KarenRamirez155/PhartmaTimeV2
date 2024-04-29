import { ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';

interface LinkAsideDashboardProps extends LinkProps {
	children: ReactNode;
}

export const LinkAsideDashboard = ({
	className,
	children,
	...props
}: LinkAsideDashboardProps) => {
	return (
		<Link
			{...props}
			className={`bg-white w-fullpy-2 text-xl hover:bg-cyan-400 text-balance transition-colors text-center font-medium rounded-md  ${className}`}
		>
			<span>{children}</span>
		</Link>
	);
};
