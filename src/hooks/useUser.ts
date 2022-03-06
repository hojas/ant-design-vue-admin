import { onMounted, ref } from 'vue'
import { Pagination } from '~/types/pagination'
import { getUsers, User } from '~/services/user'

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    title: '邮箱',
    dataIndex: 'username',
  },
]

export const useUser = () => {
  const users = ref<Pagination<User>>({
    page: 1,
    pageSize: 16,
    total: 0,
    results: [],
  })

  onMounted(async () => {
    updateUsers()
  })

  const updateUsers = async (page: number = 1) => {
    const { ok, data } = await getUsers({ page })

    if (ok) {
      users.value = data
    }
  }

  return {
    columns,
    users,
    updateUsers,
  }
}
