const Button = ({ value, text }) => {
  return (
    <select className='bg-[#e9edf1] px-3 py-2 font-semibold text-[#3f526e] rounded-md focus:outline-none'>
      <option value={value}>{text}</option>
    </select>
  );
};

export default Button;
