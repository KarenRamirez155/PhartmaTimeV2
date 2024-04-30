import { useState } from 'react';
import { IoPencilOutline, IoTrashOutline } from 'react-icons/io5';
import PacienteForm from '../../../components/dashboard/pacienteForm/PacienteForm';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const Pacientes = () => {
	const [isOpenModal, setisOpenModal] = useState(false);

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
					text: `el paciente ${name} fue eliminado`,
					icon: 'success',
				});
			}
		});
	};

	return (
		<>
			<PacienteForm isOpen={isOpenModal} setIsOpen={setisOpenModal} />
			<div className="w-full space-y-4">
				<div className="text-black flex justify-between w-full items-center">
					<h5 className="text-lg font-semibold">Lista de pacientes</h5>
					<button
						onClick={() => setisOpenModal(true)}
						className="bg-pink-300 hover:bg-pink-400 transition-colors px-3 rounded-lg font-medium py-1"
					>
						Crear nuevo paciente
					</button>
				</div>
				<table className="text-black font-light bg-cyan-400 w-full">
					<thead className="text-left border-b ">
						<tr>
							<th>Nombres</th>
							<th>Apellidos</th>
							<th>Genero</th>
							<th>Edad</th>
							<th>Enfermedades</th>
							<th className="text-center">Restricciones</th>
						</tr>
					</thead>
					<tbody className="bg-cyan-100">
						<tr className="border-b border-black">
							<td>Jhon</td>
							<td>Doe</td>
							<td>Masculino</td>
							<td>25</td>
							<td>Ninguna</td>
							<td className="text-center space-x-4">
								<button
									onClick={() => setisOpenModal(true)}
									className="bg-primary-900/80 hover:bg-primary-900 transition-colors text-white p-1 rounded-lg "
								>
									<IoPencilOutline />
								</button>
								<button
									onClick={() => handleDelete('Jhon')}
									className="bg-red-500 hover:bg-red-600 transition-colors text-white p-1 rounded-lg"
								>
									<IoTrashOutline />
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
};
export default Pacientes;
