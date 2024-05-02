import { Rol } from '../constants/dashboard-menu';

export interface Profile {
	rol: Rol;
	nombre: string;
	apellido: string;
	idUsuario: number;
}
