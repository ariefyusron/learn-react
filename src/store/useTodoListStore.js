import { create } from 'zustand'

const useTodoListStore = create((set) => ({
  list: [],
  setList: (res) => set({ list: res })
}))

export default useTodoListStore;