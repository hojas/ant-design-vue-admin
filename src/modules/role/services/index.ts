import axios from '~/utils/axios'

export const getRoles = () => axios.get('/admin/role/')
