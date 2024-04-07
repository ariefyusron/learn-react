const List = (props) => {
  return (
    <div className='mt-[32px] border border-black p-[8px] rounded-[8px]'>
        <h2 className='font-bold mb-[8px]'>Todo list:</h2>

        {props.data.length === 0 ? (
          <p>Tidak ada data</p>
        ) : props.data.map((item, index) => (
          <div key={String(index)} className='mb-[4px] pb-[2px] border-b border-black'>
            <p>{`${index + 1}. ${item}`}</p>
          </div>
        ))}
    </div>
  )
};

export default List;