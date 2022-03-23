import axios from '~/utils/axios'
import { Pagination } from '~/types/pagination'

const api = {
  user: '/admin/user/',
}

export interface User {
  id: number
  phone: string
  username: string
  nickname: string
  createdAt: string
  updatedAt: string
}

export const getUserList = async ({ page } = { page: 1 }) => {
  const { ok, data } = await axios.get<Pagination<User>>(api.user, {
    params: { page },
  })

  if (ok) {
    return data
  }

  return {
    page: 1,
    pageSize: 16,
    total: 0,
    results: [],
  }
}
