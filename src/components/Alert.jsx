import PropTypes from 'prop-types';

const Alert = ({ text }) => (
	<div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md">
		<p>{text}</p>
	</div>
);

Alert.propTypes = {
	text: PropTypes.string.isRequired,
};

export default Alert;
