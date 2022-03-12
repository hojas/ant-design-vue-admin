import axios from '~/utils/axios'

export interface LoginDto {
  username: string
  password: string
}

export const login = (user: LoginDto) =>
  axios.post<LoginDto>('/auth/login/', user)
