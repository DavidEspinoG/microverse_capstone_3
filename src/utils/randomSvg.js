import logo1 from '../img/fire.svg';
import logo2 from '../img/atom.svg';
import logo3 from '../img/electricity.svg';
import logo4 from '../img/leave.svg';
import logo5 from '../img/magic.svg';
import logo6 from '../img/monster.svg';
import logo7 from '../img/water.svg';

const RandomLogo = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];
  const random = Math.floor(Math.random() * 7);
  console.log(random);
  return (
    <img src={logos[random]} className="category-logo" alt="category ilustration" />
  );
};

export default RandomLogo;
