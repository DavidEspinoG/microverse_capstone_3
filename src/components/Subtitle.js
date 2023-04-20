import PropTypes from 'prop-types';
import '../styles/Subtitle.css';

const Subtitle = ({ text }) => (
  <div className="subtitle-container">
    <h3 className="subtitle">{text}</h3>
  </div>
);

Subtitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Subtitle;
