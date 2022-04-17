import axios from '~/utils/axios'

const api = {
  login: '/auth/login/',
}

export interface LoginDto {
  username: string
  password: string
}

export const login = (user: LoginDto) => axios.post(api.login, user)
