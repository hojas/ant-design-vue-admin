import axios from '~/utils/axios'

const api = {
  role: '/admin/role/',
}

export interface Role {
  id: number
  name: string
  code: string
}

export const getRoleList = async () => {
  const { ok, data } = await axios.get<Role[]>(api.role)

  return ok ? data : []
}
