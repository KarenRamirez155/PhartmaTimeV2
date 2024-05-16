import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import cookies from 'cookies-js';

import { Profile } from '../models/Profile';

const initProfile: Profile = {
	apellido: '',
	nombre: '',
	idUsuario: 0,
	rol: 'paciente',
	token: '',
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
				cookies.set('user-token', profile.token);
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
