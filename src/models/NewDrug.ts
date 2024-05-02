import { RequestDrug } from './RequestDrug';

export interface NewDrug extends Omit<RequestDrug, 'IdSolicitudMedicamento'> {}
