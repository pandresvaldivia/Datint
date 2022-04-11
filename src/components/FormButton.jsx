import PropTypes from 'prop-types';

const FormButton = ({ value }) => (
	<input
		type="submit"
		value={value}
		className="bg-indigo-600 p-3 text-white font-bold w-full rounded-md hover:bg-indigo-700 transition-colors cursor-pointer"
	/>
);

FormButton.propTypes = {
	value: PropTypes.string,
};

FormButton.defaultProps = {
	value: '',
};

export default FormButton;
