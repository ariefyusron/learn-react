import { useEffect } from 'react';

import { useGetTodoList } from '../hooks/useTodoList'

const Detail = () => {
  const [isLoadingTodoList,  getDataTodoList, dataTodolist] = useGetTodoList()

  useEffect(() => {
    getDataTodoList()
  },[])

  return (
    <div>
      {isLoadingTodoList ? (
        <div>Loading....</div>
      ) : (
        <div>
          {dataTodolist.map((item) => (
            <div style={{ marginBottom: '16px', borderBottom: '1px solid #000' }}>
              <h1>{item.title}</h1>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
};

export default Detail;