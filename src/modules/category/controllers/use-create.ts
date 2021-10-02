import { Category, createCategory } from '../services'

export const useCreate = () => (category: Category) => createCategory(category)
