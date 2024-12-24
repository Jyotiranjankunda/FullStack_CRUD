const Input = ({title, placeholder, name, value, onChange}) => {
  return (
    <div className='flex items-center gap-2 justify-start my-2'>
      <label className='font-semibold'>{title} : </label>
      <input
        type='text'
        placeholder={placeholder}
        className='focus:outline-none px-2 flex-1 border-b-2 border-[#eaeaea]'
        name={name}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default Input;
