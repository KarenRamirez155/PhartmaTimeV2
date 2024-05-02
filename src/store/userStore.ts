import { create } from 'zustand';
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

export const useUserStore = create<UserStoreType>()((set) => ({
	profile: initProfile,
	isLogged: false,
	loginUser: (profile: Profile) => {
		set({ profile: profile, isLogged: true });
	},
	logout: () => {
		set({ profile: initProfile, isLogged: false });
	},
}));
