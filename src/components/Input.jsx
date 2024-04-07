const Input = ({ onChange, value, onClick }) => {

  return (
    <div>
      <input
        className="border-[6px] border-black"
        onChange={(res) => {
          onChange(res.target.value)
        }}
        value={value}
      />

      <button
        className='border-[2px] border-black ml-[8px]'
        onClick={onClick}
      >
        Tambah
      </button>
    </div>
  )
};

export default Input;