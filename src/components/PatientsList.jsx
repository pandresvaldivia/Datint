import AppointmentCard from './AppointmentCard';
import SectionHeader from './SectionHeader';

const PatientsList = ({ patients }) => {
	const createId = () => {
		const date = Date.now().toString(36);
		const random = Math.random().toString(36).substring(2);

		return `${date}${random}`;
	};

	return (
		<div className="md:w-1/2 lg:w-3/5">
			{patients && patients.length ? (
				<>
					<SectionHeader
						title="Listado Pacientes"
						text="Administra tus"
						highlightText="Pacientes y Citas"
					/>
					<div className="md:h-screen overflow-y-auto">
						{patients.map(
							({ name, owner, email, discharge, symptom }, index) => (
								<AppointmentCard
									key={createId()}
									name={name}
									owner={owner}
									email={email}
									dischargeDate={discharge}
									symptom={symptom}
								/>
							)
						)}
					</div>
				</>
			) : (
				<>
					<SectionHeader
						title="Aún no hay pacientes"
						text="Empieza a agregar"
						highlightText="Pacientes"
					/>
				</>
			)}
		</div>
	);
};

export default PatientsList;
