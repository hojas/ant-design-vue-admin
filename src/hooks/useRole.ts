import { onMounted, ref } from 'vue'
import { getRoleList, Role } from '~/services/role'

const columns = [
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
    title: '创建时间',
    dataIndex: 'createdAt',
  },
  {
    title: '更新时间',
    dataIndex: 'updatedAt',
  },
]

export const useRole = () => {
  const roleList = ref<Role[]>([])

  onMounted(() => updateRoles())

  const updateRoles = async () => {
    roleList.value = await getRoleList()
  }

  return {
    columns,
    roleList,
  }
}
