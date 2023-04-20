import PropTypes from 'prop-types';
import logo1 from '../img/fire.svg';
import logo2 from '../img/atom.svg';
import logo3 from '../img/electricity.svg';
import logo4 from '../img/leave.svg';
import logo5 from '../img/magic.svg';
import logo6 from '../img/monster.svg';
import logo7 from '../img/water.svg';
import logo8 from '../img/bird.svg';
import logo9 from '../img/ghost.svg';

const RandomLogo = ({ cssClass }) => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9];
  const random = Math.floor(Math.random() * 9);
  return (
    <img src={logos[random]} className={cssClass} alt="category ilustration" />
  );
};

RandomLogo.propTypes = {
  cssClass: PropTypes.string.isRequired,
};

export default RandomLogo;
