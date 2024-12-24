import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Menu = ({ icon, link, text, selected }) => {
  return (
    <li
      className={`${
        selected ? 'bg-[#eeeeee]' : 'bg-white'
      } mt-6 flex items-center p-2 rounded-md`}>
      <FontAwesomeIcon
        icon={icon}
        className={`${
          selected ? 'text-black bg-[#eeeeee]' : 'text-[#6f767e]'
        } text-lg w-6 h-6 mr-3`}
      />
      <Link
        to={link}
        className={`${
          selected ? 'text-black bg-[#eeeeee]' : 'text-[#6f767e] bg-white'
        } text-[1.1rem] font-medium`}>
        {text}
      </Link>
    </li>
  );
};

export default Menu;
