import PropTypes from 'prop-types';

const AppointmentCard = ({ name, owner, email, dischargeDate, symptom }) => (
	<article className="mx-3 mb-3 bg-white shadow-md px-5 py-10 rounded-lg">
		<p className="font-bold mb-3 text-gray-700 uppercase">
			Nombre: <span className="font-normal normal-case">{name}</span>
		</p>
		<p className="font-bold mb-3 text-gray-700 uppercase">
			Propietario: <span className="font-normal normal-case">{owner}</span>
		</p>
		<p className="font-bold mb-3 text-gray-700 uppercase">
			Correo Electrónico:{' '}
			<span className="font-normal normal-case">{email}</span>
		</p>
		<p className="font-bold mb-3 text-gray-700 uppercase">
			Fecha alta:{' '}
			<span className="font-normal normal-case">{dischargeDate}</span>
		</p>
		<p className="font-bold mb-3 text-gray-700 uppercase">
			Síntomas: <span className="font-normal normal-case">{symptom}</span>
		</p>
	</article>
);

AppointmentCard.propTypes = {
	name: PropTypes.string.isRequired,
	owner: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	dischargeDate: PropTypes.string.isRequired,
	symptom: PropTypes.string.isRequired,
};

export default AppointmentCard;
