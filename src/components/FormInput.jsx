import PropTypes from 'prop-types';

const FormInput = ({ id, label, placeholder, setValue, value, type }) => {
	const handleChange = (e) => {
		setValue(e.target.value);
	};

	return (
		<>
			<label htmlFor={id} className="block text-gray-700 uppercase font-bold">
				{label}
			</label>
			{type === 'textarea' ? (
				<textarea
					id={id}
					placeholder={placeholder}
					className="form-input border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400 mb-5"
					onChange={handleChange}
					value={value}
				/>
			) : (
				<input
					id={id}
					type={type}
					placeholder={placeholder}
					className="form-input border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400 mb-5"
					onChange={handleChange}
					value={value}
				/>
			)}
		</>
	);
};

FormInput.propTypes = {
	id: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	label: PropTypes.string,
	placeholder: PropTypes.string,
	type: PropTypes.string,
};

FormInput.defaultProps = {
	type: 'text',
	value: '',
};

export default FormInput;
