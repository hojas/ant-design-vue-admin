import { removeCategory } from '../services'

export const useRemove = () => (id: number) => removeCategory(id)
