import { useState } from 'react'

import useTodoListStore from '../store/useTodoListStore'

const Input = () => {
  const [text, setText] = useState('')

  const list = useTodoListStore((state) => state)
  const setList = useTodoListStore(state => state.setList)

  return (
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
          setList([text, ...list])
          setText('')
        }}
      >
        Tambah
      </button>
    </div>
  )
};

export default Input;