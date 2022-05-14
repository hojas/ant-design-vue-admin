import axios from '~/utils/axios'
import { Pagination, defaultPagination } from '~/types/pagination'

const api = {
  list: '/admin/article/',
  detail: (id: number) => `/admin/article/${id}/`,
}

export interface Article {
  id: number
  title: string
  content: string
  categoryId: number
  authorId: number
  tags: string[]
  viewCount: number
  likeCount: number
  collectCount: number
  createdAt: string
  updatedAt: string
}

export interface CreateArticleDto {
  title: string
  categoryId: number
  content: string
}

export const getArticleList = async () => {
  const { ok, data } = await axios.get<Pagination<Article>>(api.list)

  return ok ? data : defaultPagination
}

export const getArticleById = (id: number) => axios.get<Article>(api.detail(id))

export const createArticle = (article: CreateArticleDto) =>
  axios.post<Article>(api.list, {
    article: {
      title: article.title,
      categoryId: article.categoryId,
      content: '',
    },
  })

export const updateArticle = (id: number, article: CreateArticleDto) =>
  axios.put<Article>(api.detail(id), { article })

export const removeArticle = (id: number) =>
  axios.delete<Article>(api.detail(id))
