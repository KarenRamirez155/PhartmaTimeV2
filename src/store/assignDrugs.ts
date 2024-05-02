import { create } from 'zustand';
import { Drug } from '../models/Drug';
import { getAllDrugService } from '../services/drugs-service';

export interface DrugsStoreType {
	drugs: Drug[];
	getAllDrugs: () => void;
}

export const useDrugsStore = create<DrugsStoreType>()((set) => ({
	drugs: [],
	getAllDrugs: () => {
		getAllDrugService().then((drugs) => {
			set({ drugs: drugs });
		});
	},
}));
