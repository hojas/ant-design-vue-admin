import axios from '~/utils/axios'
import { Pagination } from '~/types/pagination'

export interface User {
  id: number
  username: string
}

export const getUsers = ({ page } = { page: 1 }) =>
  axios.get<Pagination<User>>('/admin/user/', { params: { page } })
