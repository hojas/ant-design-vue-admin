import { ref } from 'vue'
import { Pagination } from '~/types/pagination'
import {
  Article,
  getArticleList,
  getArticleById,
  createArticle,
  updateArticle,
  removeArticle,
} from '~/services/article'

export const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    title: '标题',
    dataIndex: 'title',
  },
  {
    title: '分类',
    dataIndex: 'category',
  },
  {
    title: '作者',
    dataIndex: 'author',
  },
  {
    title: '创建时间',
    dataIndex: 'createdAt',
  },
  {
    title: '更新时间',
    dataIndex: 'updatedAt',
  },
  {
    title: '操作',
    dataIndex: 'action',
  },
]

export const useArticle = () => {
  const articleList = ref<Pagination<Article>>({
    page: 1,
    pageSize: 10,
    total: 0,
    results: [],
  })

  const updateArticleList = async () => {
    articleList.value = await getArticleList()
  }

  return {
    columns,
    articleList,
    updateArticleList,
    getArticleById,
    createArticle,
    updateArticle,
    removeArticle,
  }
}
