import { onMounted, ref } from 'vue'
import { Pagination } from '~/types/pagination'
import { getUserList, User } from '~/services/user'

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    title: '邮箱',
    dataIndex: 'username',
  },
  {
    title: '昵称',
    dataIndex: 'nickname',
  },
  {
    title: '注册时间',
    dataIndex: 'createdAt',
  },
  {
    title: '更新时间',
    dataIndex: 'updatedAt',
  },
]

export const useUser = () => {
  const userList = ref<Pagination<User>>({
    page: 1,
    pageSize: 16,
    total: 0,
    results: [],
  })

  onMounted(() => updateUserList())

  const updateUserList = async (page = 1) => {
    userList.value = await getUserList({ page })
  }

  return {
    columns,
    userList,
    updateUserList,
  }
}
