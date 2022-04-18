import PropTypes from 'prop-types';

const CardButton = ({ text, color, hoverColor, onClick }) => {
	return (
		<button
			onClick={onClick}
			className={`${color} ${hoverColor} text-white font-bold py-2 px-10 uppercase rounded-lg transition-colors`}
		>
			{text}
		</button>
	);
};

CardButton.propTypes = {
	text: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	color: PropTypes.string,
	hoverColor: PropTypes.string,
};

CardButton.defaultProps = {
	color: 'bg-indigo-600',
	hoverColor: 'hover:bg-indigo-700',
};

export default CardButton;
