import { getUser, LoginDto, login as loginService } from '~/services/auth'

export const useAuth = () => {
  const login = (user: LoginDto) => loginService(user)

  return {
    getUser,
    login,
  }
}
