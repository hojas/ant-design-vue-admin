import axios from '~/utils/axios'

export interface Role {
  id: number
  name: string
  code: string
}

export const getRoles = () => axios.get<Role[]>('/admin/role/')
