import PropTypes from 'prop-types';

import AppointmentCard from './AppointmentCard';
import SectionHeader from './SectionHeader';

const PatientsList = ({ patients, onClick }) => {
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
						{patients.map((patientInfo) => {
							const { name, owner, email, discharge, symptom, id } =
								patientInfo;

							return (
								<AppointmentCard
									key={id}
									name={name}
									owner={owner}
									email={email}
									dischargeDate={discharge}
									symptom={symptom}
									onClick={() => onClick(patientInfo)}
								/>
							);
						})}
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

PatientsList.propTypes = {
	patients: PropTypes.array.isRequired,
	onClick: PropTypes.func.isRequired,
};

export default PatientsList;
