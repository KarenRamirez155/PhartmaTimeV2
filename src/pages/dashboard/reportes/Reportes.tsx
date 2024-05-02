const Reportes = () => {
	return (
		<div className="w-full space-y-12">
			<ReporteSection
				titulo="Reporte de Enfermedad"
				description="La Enfermedad más recurrente entre los pacientes es:"
				resultado="Diabetes"
			/>
			<ReporteSection
				titulo="Reporte de Edad"
				description="La Edad más frecuente para dicha enfermedad es: "
				resultado="70"
			/>
			<ReporteSection
				titulo="Reporte de Medicamento"
				description="El Medicamento asignado con mayor frecuencia: "
				resultado="Acetaminofen"
			/>
		</div>
	);
};
export default Reportes;

interface ReporteSectionProps {
	titulo: string;
	description: string;
	resultado: string;
}
const ReporteSection = ({
	titulo,
	description,
	resultado,
}: ReporteSectionProps) => {
	return (
		<section className="bg-orange-100 rounded-lg grid grid-cols-3 gap-x-10 gap-y-4 py-4 px-6 mx-auto w-2/3">
			<span className=" col-span-3">
				<h5 className="bg-blue-900 text-center w-1/2 mx-auto rounded-lg font-semibold">
					{titulo}
				</h5>
			</span>
			<p className="col-span-2 bg-white text-black">{description}</p>
			<p className="bg-cyan-400 text-center text-black font-semibold">
				{resultado}
			</p>
		</section>
	);
};
