import { ref } from 'vue'
import {
  Category,
  getCategoryList,
  createCategory,
  updateCategory,
  removeCategory,
} from '~/services/category'

export const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    title: '名称',
    dataIndex: 'name',
  },
  {
    title: 'CODE',
    dataIndex: 'code',
  },
  {
    title: '排序码',
    dataIndex: 'orderIndex',
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

export const useCategory = () => {
  const categoryList = ref<Category[]>([])

  const updateCategoryList = async () => {
    categoryList.value = await getCategoryList()
  }

  return {
    columns,
    categoryList,
    updateCategoryList,
    createCategory,
    updateCategory,
    removeCategory,
  }
}
