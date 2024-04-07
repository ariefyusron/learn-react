const Input = (props) => {

  return (
    <div>
      <input
        className="border-[6px] border-black"
        onChange={(res) => {
          props.onChange(res.target.value)
        }}
        value={props.value}
      />

      <button
        className='border-[2px] border-black ml-[8px]'
        onClick={props.onClick}
      >
        Tambah
      </button>
    </div>
  )
};

export default Input;