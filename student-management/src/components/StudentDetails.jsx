import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const StudentDetails = ({ name, cohort, courses, date, loginTime, status, actions }) => {
  return (
    <tr className='border-b-2 border-[#eaeaea]'>
      <td className='p-3 max-w-[150px] break-words'>{name}</td>
      <td className='p-3 max-w-[150px] break-words'>{cohort}</td>
      <td className='p-3 max-w-[150px] break-words'>{courses}</td>
      <td className='p-3 max-w-[150px] break-words'>{date}</td>
      <td className='p-3 max-w-[150px] break-words'>{loginTime}</td>
      <td className='p-3 max-w-[150px] break-words'>
        {status === 'active' ? (
          <FontAwesomeIcon icon={faCircle} className='text-green-700' />
        ) : (
          <FontAwesomeIcon icon={faCircle} className='text-red-700' />
        )}
      </td>
      <td className='p-2'>{actions}</td>
    </tr>
  );
};

export default StudentDetails;
