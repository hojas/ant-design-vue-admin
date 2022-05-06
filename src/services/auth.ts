import axios from '~/utils/axios'

const api = {
  login: '/auth/login/',
  user: '/auth/user/',
}

export interface LoginDto {
  username: string
  password: string
}

export const login = (user: LoginDto) => axios.post(api.login, user)
export const getUser = () => axios.get(api.user)
