import { LoginDto, login as loginService } from '~/services/auth'

export const useLogin = () => {
  const login = (user: LoginDto) => loginService(user)

  return {
    login,
  }
}
