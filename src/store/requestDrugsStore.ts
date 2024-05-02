import { create } from 'zustand';
import { RequestDrug } from '../models/RequestDrug';
import { getRequestDrugsService } from '../services/request-drugs-service';

export interface RequestDrugsStoreType {
	requestDrugs: RequestDrug[];
	getAllRequestDrugs: () => void;
}

export const useRequestDrugsStore = create<RequestDrugsStoreType>()((set) => ({
	requestDrugs: [],
	getAllRequestDrugs: () => {
		getRequestDrugsService().then((requestDrugs) => {
			set({ requestDrugs: requestDrugs });
		});
	},
}));
