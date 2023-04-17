import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = ({ title }) => (
  <header className="header">
    <Link to="/"><i className="fa-solid fa-chevron-left" /></Link>
    <h3>{title}</h3>
    <i className="fa-solid fa-microphone" />
    <i className="fa-solid fa-gear" />
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
