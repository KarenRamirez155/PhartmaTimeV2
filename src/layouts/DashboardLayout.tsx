import { Outlet, useNavigate } from 'react-router-dom';
import { Header } from '../components/dashboard/header/Header';
import { Aside } from '../components/dashboard/aside/Aside';
import { useUserStore } from '../store/userStore';
import { useEffect } from 'react';

const DashboardLayout = () => {
	const navigate = useNavigate();
	const { isLogged } = useUserStore();

	useEffect(() => {
		if (!isLogged) {
			navigate('/login');
		}
	}, []);

	return (
		<div>
			<Header />
			<main className="flex my-8 w-full space-x-4 px-4">
				<Aside />
				<Outlet />
			</main>
		</div>
	);
};
export default DashboardLayout;
