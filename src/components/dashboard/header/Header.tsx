import { IoPersonCircleOutline } from 'react-icons/io5';

export const Header = () => {
	return (
		<header className="bg-primary-900 flex justify-between items-center px-4 py-2">
			<img src="/img/logo_pharmatime.webp" width={350} />
			<IoPersonCircleOutline size={62} />
		</header>
	);
};
