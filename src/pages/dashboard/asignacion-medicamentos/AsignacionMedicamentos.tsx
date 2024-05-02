import { useEffect, useState } from 'react';
import { AsignarMedicamentoForm } from '../../../components/dashboard/asignarMedicamentoForm/AsignarMedicamentoForm';
import { NuevoMedicamentoForm } from '../../../components/dashboard/nuevoMedicamentoForm/NuevoMedicamentoForm';

import { useDrugsStore } from '../../../store/assignDrugs';
import { Drug } from '../../../models/Drug';

const AsignacionMedicamentos = () => {
	const [isOpenModal, setisOpenModal] = useState(false);
	const [isOpenModalNuevoMedicamento, setisOpenModalNuevoMedicamento] =
		useState(false);

	const { getAllDrugs, drugs } = useDrugsStore();
	const [selectedDrug, setSelectedDrug] = useState<Drug | undefined>(undefined);

	useEffect(() => {
		getAllDrugs();
	}, []);

	return (
		<>
			<AsignarMedicamentoForm
				isOpen={isOpenModal}
				setIsOpen={setisOpenModal}
				drug={selectedDrug}
			/>
			<NuevoMedicamentoForm
				isOpen={isOpenModalNuevoMedicamento}
				setIsOpen={setisOpenModalNuevoMedicamento}
			/>
			<div className="w-full space-y-4">
				<div className="text-black flex justify-between w-full items-center">
					<h5 className="text-lg font-semibold">Lista de medicamentos</h5>
					<button
						onClick={() => setisOpenModalNuevoMedicamento(true)}
						className="bg-pink-300 hover:bg-pink-400 transition-colors px-3 rounded-lg font-medium py-1"
					>
						Solicitar nuevo medicamento
					</button>
				</div>
				<table className="text-black font-light bg-cyan-400 w-full">
					<thead className="text-left border-b ">
						<tr>
							<th>Nombre del Medicamento</th>
							<th>Sirve para</th>
							<th>Presentación</th>
							<th>Contraindicaciones</th>
							<th className="text-center">Acción</th>
						</tr>
					</thead>
					<tbody className="bg-cyan-100">
						{drugs &&
							drugs.map((drug) => (
								<tr className="border-b border-black">
									<td>{drug.nombre}</td>
									<td>{drug.sirvePara}</td>
									<td>{drug.presentacion}</td>
									<td>{drug.contraindicaciones}</td>
									<td className="text-center space-x-4">
										<button
											onClick={() => {
												setisOpenModal(true);
												setSelectedDrug(drug);
											}}
											className=" bg-blue-900 text-white px-4 py-1 hover:bg-blue-950 transition-colors cursor-pointer"
										>
											Asignar
										</button>
									</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</>
	);
};
export default AsignacionMedicamentos;
