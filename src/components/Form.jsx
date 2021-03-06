import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import FormButton from './FormButton';
import SectionHeader from './SectionHeader';
import FormInput from './FormInput';
import Alert from './Alert';

const createId = () => {
	const date = Date.now().toString(36);
	const random = Math.random().toString(36).substring(2);

	return `${date}${random}`;
};

const Form = ({ setPatients, patient, setPatient }) => {
	const [name, setName] = useState('');
	const [owner, setOwner] = useState('');
	const [email, setEmail] = useState('');
	const [discharge, setDischarge] = useState('');
	const [symptom, setSymptom] = useState('');

	const [error, setError] = useState(false);

	useEffect(() => {
		if (Object.keys(patient).length > 0) {
			setName(patient.name);
			setOwner(patient.owner);
			setEmail(patient.email);
			setDischarge(patient.discharge);
			setSymptom(patient.symptom);
		}
	}, [patient]);

	const createPatient = () => {
		const newPatient = {
			name: name.trim(),
			owner: owner.trim(),
			email: email.trim(),
			discharge: discharge.trim(),
			symptom: symptom.trim(),
		};

		if (patient.id) {
			newPatient.id = patient.id;
		} else {
			newPatient.id = createId();
		}

		return newPatient;
	};

	const printError = () => {
		setError(true);

		setTimeout(() => {
			setError(false);
		}, 1000);
	};

	const handleReset = () => {
		setName('');
		setOwner('');
		setEmail('');
		setDischarge('');
		setSymptom('');
	};

	const updatePatients = (patients) => {
		const patientsUpdated = patients.map((originalPatient) =>
			originalPatient.id === patient.id ? createPatient() : originalPatient
		);

		return patientsUpdated;
	};

	const validateForm = (e) => {
		e.preventDefault();

		if ([name, owner, email, discharge, symptom].includes(''))
			return printError();

		if (patient.id) {
			setPatients((patients) => updatePatients(patients));
			setPatient({});
		} else {
			setPatients((patients) => [...patients, createPatient()]);
		}

		handleReset();
	};

	return (
		<div className="md:w-1/2 lg:w-2/5 mb-8 md:mb-0">
			<SectionHeader
				title="Seguimiento Pacientes"
				text="Agrega Pacientes y"
				highlightText="Administralos"
			/>
			{error && <Alert text="Todos los campos son obligatorios" />}
			<form
				onSubmit={validateForm}
				className="bg-white shadow-md rounded-lg py-10 px-5"
			>
				<fieldset>
					<FormInput
						id="pet-name"
						label="Nombre mascota"
						placeholder="Nombre de la mascota"
						setValue={setName}
						value={name}
					/>
					<FormInput
						id="owner-name"
						label="Nombre del propietario"
						placeholder="Nombre del propietario"
						setValue={setOwner}
						value={owner}
					/>
					<FormInput
						id="contact-email"
						type="email"
						label="Correo electr??nico"
						placeholder="Correo electr??nico"
						setValue={setEmail}
						value={email}
					/>
					<FormInput
						id="discharge-date"
						type="date"
						label="Fecha de alta"
						setValue={setDischarge}
						value={discharge}
					/>
					<FormInput
						id="symptom"
						type="textarea"
						label="S??ntomas"
						placeholder="Describe los s??ntomas"
						setValue={setSymptom}
						value={symptom}
					/>
					<FormButton
						value={patient.id ? 'Actualizar paciente' : 'Agregar paciente'}
					/>
				</fieldset>
			</form>
		</div>
	);
};

Form.propTypes = {
	setPatients: PropTypes.func.isRequired,
	patient: PropTypes.object.isRequired,
	setPatient: PropTypes.func.isRequired,
};

export default Form;
