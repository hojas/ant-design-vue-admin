import axios from '~/utils/axios'
import { Pagination, defaultPagination } from '~/types/pagination'

const api = {
  list: '/admin/comment/',
  resolve: (id: number) => `/admin/comment/${id}/resolve/`,
  reject: (id: number) => `/admin/comment/${id}/reject/`,
}

export interface Comment {
  id: number
  content: string
  authorId: number
  articleId: number
  status: 'pending' | 'resolved' | 'rejected'
  parentId?: number
  createdAt: string
}

export const getCommentList = async () => {
  const { ok, data } = await axios.get<Pagination<Comment>>(api.list)

  return ok ? data : defaultPagination
}

export const resolveComment = (id: number) => axios.post(api.resolve(id))

export const rejectComment = (id: number) => axios.post(api.reject(id))
