import { onMounted, ref } from 'vue'
import { getRoles, Role } from '~/services/role'

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
]

export const useRole = () => {
  const roles = ref<Role[]>([])

  onMounted(() => updateRoles())

  const updateRoles = async () => {
    const { ok, data } = await getRoles()

    if (ok) {
      roles.value = data
    }
  }

  return {
    columns,
    roles,
  }
}
