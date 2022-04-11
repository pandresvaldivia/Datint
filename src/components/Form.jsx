import { useState } from 'react';
import PropTypes from 'prop-types';

import FormButton from './FormButton';
import SectionHeader from './SectionHeader';
import FormInput from './FormInput';
import Alert from './Alert';

const Form = ({ patients, setPatients }) => {
	const [name, setName] = useState('');
	const [owner, setOwner] = useState('');
	const [email, setEmail] = useState('');
	const [discharge, setDischarge] = useState('');
	const [symptom, setSymptom] = useState('');

	const [error, setError] = useState(false);

	const patient = {
		name,
		owner,
		email,
		discharge,
		symptom,
	};

	const printError = () => {
		setError(true);

		setTimeout(() => {
			setError(false);
		}, 1000);
	};

	const validateForm = (e) => {
		e.preventDefault();

		[name, owner, email, discharge, symptom].includes('')
			? printError()
			: setPatients([...patients, patient]);
	};

	return (
		<div className="md:w-1/2 lg:w-2/5">
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
					/>
					<FormInput
						id="owner-name"
						label="Nombre del propietario"
						placeholder="Nombre del propietario"
						setValue={setOwner}
					/>
					<FormInput
						id="contact-email"
						type="email"
						label="Correo electrónico"
						placeholder="Correo electrónico"
						setValue={setEmail}
					/>
					<FormInput
						id="discharge-date"
						type="date"
						label="Fecha de alta"
						setValue={setDischarge}
					/>
					<FormInput
						id="symptom"
						type="textarea"
						label="Síntomas"
						placeholder="Describe los síntomas"
						setValue={setSymptom}
					/>
					<FormButton value="Agregar paciente" />
				</fieldset>
			</form>
		</div>
	);
};

Form.propTypes = {
	patients: PropTypes.array.isRequired,
	setPatients: PropTypes.func.isRequired,
};

export default Form;
