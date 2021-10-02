import axios from '~/utils/axios'

export type Category = {
  id?: number
  name: string
  code: string
}

export const getCategories = () => axios.get('/admin/category/')

export const createCategory = (category: Category) =>
  axios.post<Category>(`/admin/category/`, { category })

export const updateCategory = (id: number, category: Category) =>
  axios.put<Category>(`/admin/category/${id}/`, { category })

export const removeCategory = (id: number) =>
  axios.delete<Category>(`/admin/category/${id}/`)
