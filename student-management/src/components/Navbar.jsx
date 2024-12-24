import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion, faMessage, faBell } from '@fortawesome/free-regular-svg-icons';
import avatar from '../assets/avatar.png';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between h-16 mt-12 w-[100vw] md:w-[85vw] md:mt-4' id='navbar'>
      <div className='flex items-center flex-1 h-3/4 rounded-[10px] bg-white'>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className='w-10 text-lg text-[#6f767e] bg-white'
        />
        <input
          type='text'
          placeholder='Search your course'
          className='h-full pr-2 focus:outline-none w-full rounded-[10px] bg-white'
        />
      </div>
      <div className='flex justify-between items-center flex-1 pl-4 lg:pl-12 md:pl-8'>
        <FontAwesomeIcon icon={faCircleQuestion} className='text-[#6f767e] text-lg' />
        <FontAwesomeIcon icon={faMessage} className='text-[#6f767e] text-lg' />
        <FontAwesomeIcon icon={faSliders} className='text-[#6f767e] text-lg' />
        <FontAwesomeIcon icon={faBell} className='text-[#6f767e] text-lg' />
        <img src={avatar} alt='avatar' className='w-14' />
        <span className='text-lg pr-4 font-medium hidden md:block'>Adeline H. Dancy</span>
      </div>
    </div>
  );
};

export default Navbar;
