import '../styles/Header.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = ({ title }) => (
  <header className="header">
    <Link to="/" className="back-icon"><i className="fa-solid fa-chevron-left" /></Link>
    <h3>{title}</h3>
    <div className="header-right">
      <i className="fa-solid fa-microphone" />
      <i className="fa-solid fa-gear" />
    </div>
  </header>
);

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: 'Pokemon',
};

export default Header;
