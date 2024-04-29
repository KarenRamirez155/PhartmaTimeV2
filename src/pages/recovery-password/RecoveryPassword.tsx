import ButtonGreen from '../../components/ui/ButtonGreen';
import { Input } from '../../components/ui/Input';

export const RecoveryPassword = () => {
	return (
		<div className="bg-principal h-screen w-screen object-cover object-center flex justify-center items-center">
			<div className="mx-auto absolute bg-primary-400 shadow-lg rounded-lg">
				<h4 className="bg-primary-900 text-center uppercase rounded-t-lg">
					Recuperar Contraseña
				</h4>
				<div className="mx-12 mt-4 mb-12 rounded-b-lg">
					<div className="flex items-end">
						<label className="flex flex-col text-center">
							<span className="text-black font-semibold">
								Correo electrónico
							</span>
							<Input type="text" placeholder="Escriba aqui" />
						</label>
						<div className="w-full mx-4 px-4">
							<ButtonGreen>Solicitar código</ButtonGreen>
						</div>
					</div>
					<div className="flex items-end">
						<label className="flex flex-col text-center">
							<span className="text-black font-semibold">Digíte el código</span>
							<Input type="text" placeholder="Escriba aqui" />
						</label>
						<div className="w-full mx-4 px-4">
							<ButtonGreen>Enviar</ButtonGreen>
						</div>
					</div>
					<div className="flex items-end">
						<label className="flex flex-col text-center">
							<span className="text-black font-semibold">
								Correo electrónico
							</span>
							<Input type="text" placeholder="Escriba aqui" />
						</label>
						<div className="w-full mx-4 px-4">
							<ButtonGreen>Guardar</ButtonGreen>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
