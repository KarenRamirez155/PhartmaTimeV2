import { useEffect, useState } from 'react';
import { IoPencilOutline, IoTrashOutline } from 'react-icons/io5';
import PacienteForm from '../../../components/dashboard/pacienteForm/PacienteForm';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { PacienteModel } from '../../../models/PacienteModel';
import { usePacienteStore } from '../../../store/pacienteStore';
import { useUserStore } from '../../../store/userStore';
import { deletePacienteService } from '../../../services/patient-service';

const Pacientes = () => {
	const [isOpenModal, setisOpenModal] = useState(false);
	const [paciente, setPaciente] = useState<PacienteModel | undefined>(
		undefined
	);
	const { profile } = useUserStore();
	const { getAllPacientes, pacientes } = usePacienteStore();

	useEffect(() => {
		getAllPacientes(profile.idUsuario);
	}, []);

	const handleDelete = (idPatient: number) => {
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
				deletePacienteService(idPatient)
					.then(() => {
						MySwal.fire({
							title: 'Deleted!',
							text: `el paciente ${idPatient} fue eliminado`,
							icon: 'success',
						});
						getAllPacientes(profile.idUsuario);
					})
					.catch(() => {
						MySwal.fire({
							title: 'Ocurrio un error',
							text: `el paciente ${idPatient} no fue eliminado`,
							icon: 'error',
						});
					});
			}
		});
	};

	return (
		<>
			<PacienteForm
				isOpen={isOpenModal}
				setIsOpen={setisOpenModal}
				paciente={paciente}
			/>
			<div className="w-full space-y-4">
				<div className="text-black flex justify-between w-full items-center">
					<h5 className="text-lg font-semibold">Lista de pacientes</h5>
					<button
						onClick={() => {
							setisOpenModal(true);
							setPaciente(undefined);
						}}
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
							<th>Telefono</th>
							<th>Correo</th>
							<th className="text-center">Acciones</th>
						</tr>
					</thead>
					<tbody className="bg-cyan-100">
						{pacientes &&
							pacientes.map((pat) => (
								<tr key={pat.idUsuario} className="border-b border-black">
									<td>{pat.nombre}</td>
									<td>{pat.apellido}</td>
									<td>{pat.genero}</td>
									<td>{pat.edad}</td>
									<td>{pat.telefono}</td>
									<td>{pat.correo}</td>
									<td className="text-center space-x-4">
										<button
											onClick={() => {
												setisOpenModal(true);
												setPaciente(pat);
											}}
											className="bg-primary-900/80 hover:bg-primary-900 transition-colors text-white p-1 rounded-lg "
										>
											<IoPencilOutline />
										</button>
										<button
											onClick={() => handleDelete(pat.idUsuario)}
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
export default Pacientes;
