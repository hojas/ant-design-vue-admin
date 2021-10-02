import { Category, updateCategory } from '../services'

export const useUpdate = () => (id: number, category: Category) =>
  updateCategory(id, category)
