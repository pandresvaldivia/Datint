import { useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import PatientsList from './components/PatientsList';

const App = () => {
	const [patients, setPatients] = useState([]);
	const [patient, setPatient] = useState({});

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
				<PatientsList patients={patients} onClick={setPatient} />
			</div>
		</div>
	);
};

export default App;
