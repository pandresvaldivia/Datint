import PropTypes from 'prop-types';
import CardButton from './CardButton';

const AppointmentCard = ({
	name,
	owner,
	email,
	dischargeDate,
	symptom,
	onClickEdit,
	onClickDelete,
}) => (
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

		<div className="flex justify-end gap-2 mt-6">
			<CardButton text="Editar" onClick={onClickEdit} />
			<CardButton
				text="Eliminar"
				color="bg-red-600"
				hoverColor="hover:bg-red-700"
				onClick={onClickDelete}
			/>
		</div>
	</article>
);

AppointmentCard.propTypes = {
	name: PropTypes.string.isRequired,
	owner: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	dischargeDate: PropTypes.string.isRequired,
	symptom: PropTypes.string.isRequired,
	onClickEdit: PropTypes.func.isRequired,
	onClickDelete: PropTypes.func.isRequired,
};

export default AppointmentCard;
