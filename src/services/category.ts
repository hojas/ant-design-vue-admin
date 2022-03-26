import axios from '~/utils/axios'

const api = {
  list: '/admin/category/',
  detail: (id: number) => `/admin/category/${id}/`,
}

export interface Category {
  id: number
  name: string
  code: string
  orderIndex: number
  createdAt: string
  updatedAt: string
}

export interface CreateCategoryDto {
  name: string
  code: string
  orderIndex: number
}

export const getCategoryList = async () => {
  const { ok, data } = await axios.get<Category[]>(api.list)

  return ok ? data : []
}

export const createCategory = (category: CreateCategoryDto) =>
  axios.post<Category>(api.list, { category })

export const updateCategory = (id: number, category: CreateCategoryDto) =>
  axios.put<Category>(api.detail(id), { category })

export const removeCategory = (id: number) =>
  axios.delete<Category>(api.detail(id))
