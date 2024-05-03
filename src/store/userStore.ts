import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { Profile } from '../models/Profile';

const initProfile: Profile = {
	apellido: '',
	nombre: '',
	idUsuario: 0,
	rol: 'paciente',
};

export interface UserStoreType {
	profile: Profile;
	isLogged: boolean;
	loginUser: (profile: Profile) => void;
	logout: () => void;
}

export const useUserStore = create<UserStoreType>()(
	persist(
		(set) => ({
			profile: initProfile,
			isLogged: false,
			loginUser: (profile: Profile) => {
				set({ profile: profile, isLogged: true });
			},
			logout: () => {
				set({ profile: initProfile, isLogged: false });
			},
		}),
		{
			name: 'userStore',
		}
	)
);
