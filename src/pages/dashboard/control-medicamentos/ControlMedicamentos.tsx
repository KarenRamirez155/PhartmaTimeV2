import { useEffect, useState } from 'react';
import { AsignarMedicamentoForm } from '../../../components/dashboard/asignarMedicamentoForm/AsignarMedicamentoForm';
import { IoPencilOutline, IoTrashOutline } from 'react-icons/io5';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import { useDrugsStore } from '../../../store/assignDrugs';

const ControlMedicamentos = () => {
	const [isOpenModal, setisOpenModal] = useState(false);
	const { drugs, getAllDrugs } = useDrugsStore();
	useEffect(() => {
		getAllDrugs();
	}, []);
	const handleDelete = (name: string) => {
		const MySwal = withReactContent(Swal);
		MySwal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!',
		}).then((result) => {
			if (result.isConfirmed) {
				MySwal.fire({
					title: 'Deleted!',
					text: `el medicamento ${name} fue eliminado`,
					icon: 'success',
				});
			}
		});
	};

	return (
		<>
			<AsignarMedicamentoForm isOpen={isOpenModal} setIsOpen={setisOpenModal} />

			<div className="w-full space-y-4">
				<div className="text-black flex justify-between w-full items-center">
					<h5 className="text-lg font-semibold">Lista de medicamentos</h5>
					<button
						onClick={() => setisOpenModal(true)}
						className="bg-pink-300 hover:bg-pink-400 transition-colors px-3 rounded-lg font-medium py-1"
					>
						Crear nuevo medicamento
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
											onClick={() => setisOpenModal(true)}
											className="bg-primary-900/80 hover:bg-primary-900 transition-colors text-white p-1 rounded-lg "
										>
											<IoPencilOutline />
										</button>
										<button
											onClick={() => handleDelete('azetaminofen')}
											className="bg-red-500 hover:bg-red-600 transition-colors text-white p-1 rounded-lg"
										>
											<IoTrashOutline />
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
export default ControlMedicamentos;
