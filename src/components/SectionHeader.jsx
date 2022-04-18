import PropTypes from 'prop-types';

const SectionHeader = ({ title, text, highlightText }) => (
	<div className="mb-5">
		<h2 className="font-black text-3xl text-center">{title}</h2>
		<p className="text-lg mt-5 text-center">
			{`${text} `}
			<span className="text-indigo-600 font-bold">{highlightText}</span>
		</p>
	</div>
);

SectionHeader.propTypes = {
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	highlightText: PropTypes.string.isRequired,
};

export default SectionHeader;
