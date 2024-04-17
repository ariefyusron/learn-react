import Input from '../components/Input'
import List from '../components/List'
import useTodoListStore from '../store/useTodoListStore'

const App = () => {
  const setList = useTodoListStore(state => state.setList)

  return (
    <div className="p-8">
      {/* ini input */}
      <Input />

      {/* ini list data */}
      <List />

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