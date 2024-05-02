import { Popover } from '@headlessui/react';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { useUserStore } from '../../../store/userStore';
import { useNavigate } from 'react-router-dom';

const profileImage = {
	tutor: '/icons/tutor.svg',
	medico: '/icons/medico.svg',
	paciente: '/icons/paciente.svg',
};

export const Header = () => {
	const { profile, logout } = useUserStore();
	const navigate = useNavigate();
	return (
		<header className="bg-primary-900 flex justify-between items-center px-4 py-2">
			<img src="/img/logo_pharmatime.webp" width={350} />

			<Popover className="relative">
				<Popover.Button>
					<IoPersonCircleOutline
						size={62}
						className="hover:text-violet-500 cursor-pointer transition-colors"
					/>
				</Popover.Button>

				<Popover.Panel className="absolute z-10 right-0 bg-cyan-400">
					<div className="flex flex-col space-y-4 w-48 p-3 text-center">
						<img
							src={profileImage[profile.rol]}
							className="size-24 mx-auto"
							alt={'imagen de perfil'}
						/>
						<p className="text-black font-bold">
							{profile.nombre} {profile.apellido}
						</p>
						<button
							className="bg-red-500 hover:bg-red-600 transition-colors rounded-lg"
							onClick={() => {
								logout();
								navigate('/login');
							}}
						>
							Cerrar Sesion
						</button>
					</div>

					<img src="/solutions.jpg" alt="" />
				</Popover.Panel>
			</Popover>
		</header>
	);
};
