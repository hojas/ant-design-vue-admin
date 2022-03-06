import { onMounted, ref } from 'vue'
import {
  Category,
  getCategories,
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
    title: '操作',
    slots: { customRender: 'action' },
  },
]

export const useCategory = () => {
  const categories = ref<Category[]>([])

  onMounted(() => updateCategories())

  const updateCategories = async () => {
    const { ok, data } = await getCategories()

    if (ok) {
      categories.value = data
    }
  }

  return {
    columns,
    categories,
    updateCategories,
    createCategory,
    updateCategory,
    removeCategory,
  }
}
