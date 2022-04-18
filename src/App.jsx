import { useState, useEffect } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import PatientsList from './components/PatientsList';

const App = () => {
	const [patients, setPatients] = useState([]);
	const [patient, setPatient] = useState({});

	useEffect(() => {
		const patients = JSON.parse(localStorage.getItem('patients')) ?? [];

		setPatients(patients);
	}, []);

	useEffect(() => {
		localStorage.setItem('patients', JSON.stringify(patients));
	}, [patients]);

	const deletePatients = (id) => {
		const newPatients = patients.filter((patient) => patient.id !== id);

		setPatients(newPatients);
	};

	return (
		<div className="container mx-auto mt-20 md:px-4">
			<Header />
			<div className="md:flex mt-12">
				<Form
					patients={patients}
					setPatients={setPatients}
					patient={patient}
					setPatient={setPatient}
				/>
				<PatientsList
					patients={patients}
					onClickEdit={setPatient}
					onClickDelete={deletePatients}
				/>
			</div>
		</div>
	);
};

export default App;
