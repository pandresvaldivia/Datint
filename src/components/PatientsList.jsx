import AppointmentCard from './AppointmentCard';
import SectionHeader from './SectionHeader';

const PatientsList = () => {
	return (
		<div className="md:w-1/2 lg:w-3/5">
			<SectionHeader
				title="Listado Pacientes"
				text="Administra tus"
				highlightText="Pacientes y Citas"
			/>
			<div className="md:h-screen overflow-y-auto">
				<AppointmentCard
					name="Hook"
					owner="Pandres"
					email="pandres@gmail.com"
					dischargeDate="10-10-22"
					symptom="No quiere tomar agua"
				/>
				<AppointmentCard
					name="Hook"
					owner="Pandres"
					email="pandres@gmail.com"
					dischargeDate="10-10-22"
					symptom="No quiere tomar agua"
				/>
				<AppointmentCard
					name="Hook"
					owner="Pandres"
					email="pandres@gmail.com"
					dischargeDate="10-10-22"
					symptom="No quiere tomar agua"
				/>
				<AppointmentCard
					name="Hook"
					owner="Pandres"
					email="pandres@gmail.com"
					dischargeDate="10-10-22"
					symptom="No quiere tomar agua"
				/>
			</div>
		</div>
	);
};

export default PatientsList;
