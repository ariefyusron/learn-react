import { useState } from 'react';

import Input from '../components/Input'
import List from '../components/List'

const App = () => {
  const [text, setText] = useState("")
  const [list, setList] = useState([])

  return (
    <div className="p-8">
      {/* ini input */}
      <Input
        value={text}
        onChange={(res) => {
          setText(res)
        }}
        onClick={() => {
          setText('')
          setList([text, ...list])
        }}
      />

      {/* ini list data */}
      <List data={list} />

      <button
        className='border-[2px] border-black mt-[32px]'
        onClick={() => {
          setList([])
        }}
      >
        Hapus Data
      </button>
    </div>
  )
}

export default App