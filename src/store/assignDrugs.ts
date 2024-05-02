import { create } from 'zustand';
import { getAllAsignDrugService } from '../services/drugs-service';
import { Drug } from '../models/Drug';

export interface AssignDrugsStoreType {
	assignDrugs: Drug[];
	getAllAssignDrugs: () => void;
}

export const useAssignDrugsStore = create<AssignDrugsStoreType>()((set) => ({
	assignDrugs: [],
	getAllAssignDrugs: () => {
		getAllAsignDrugService().then((assignDrugs) => {
			set({ assignDrugs: assignDrugs });
		});
	},
}));
