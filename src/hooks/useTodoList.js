import { useState } from 'react';
import axios from 'axios';

export const useGetTodoList = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [data, setData] = useState([])

  const getData = async () => {
    try {
      setIsLoading(true)
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setIsLoading(false)
      setData(res.data)
    } catch (err) {
      setIsLoading(false)
      setIsError(true)
    }
  }

  return [isLoading, getData, data, isError]
}