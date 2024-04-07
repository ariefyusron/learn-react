import { useState } from 'react';

const App = () => {
  const [text, setText] = useState("")
  const [list, setList] = useState([])

  return (
    <div className="p-8">
      {/* ini input */}
      <div>
        <input
          className="border-[6px] border-black"
          onChange={(res) => {
            setText(res.target.value)
          }}
          value={text}
        />

        <button
          className='border-[2px] border-black ml-[8px]'
          onClick={() => {
            setText("")
            setList([text, ...list])
          }}
        >
          Tambah
        </button>
      </div>

      {/* ini list data */}
      <div className='mt-[32px] border border-black p-[8px] rounded-[8px]'>
          <h2 className='font-bold mb-[8px]'>Todo list:</h2>

          {list.map((item, index) => (
            <div key={String(index)} className='mb-[4px] pb-[2px] border-b border-black'>
              <p>{item}</p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default App