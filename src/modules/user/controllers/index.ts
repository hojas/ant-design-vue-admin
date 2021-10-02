import { getUsers } from '../services'

export const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    title: '邮箱',
    dataIndex: 'username',
  },
]

const { data } = await getUsers()

export const users = data
